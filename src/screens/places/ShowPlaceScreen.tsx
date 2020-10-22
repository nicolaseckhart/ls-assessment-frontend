import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { CompactDailyHours, DailyOpeningHours, Day, Place } from '../../shared';
import { Card, Col, Row } from 'react-bootstrap';
import PlaceOpenIndicator from '../../components/PlaceOpenIndicator';

interface State {
  place: Place | undefined;
}

interface PlaceNavParams {
  id: string;
}

class ShowPlaceScreen extends React.Component<RouteChildrenProps<PlaceNavParams>, State> {
  constructor(props: RouteChildrenProps<PlaceNavParams>) {
    super(props);
    this.state = { place: undefined };
  }

  async componentDidMount() {
    const response = await this.fetchPlaceData();
    if (response.status >= 400) {
      this.props.history.push('/404');
    } else {
      this.setState({ place: response as Place });
    }
  }

  fetchPlaceData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/places/${this.props.match!.params.id}`);
    return response.json();
  };

  renderPlaceAttribute = (name: string, value: string | number) => (
    <p>
      <b>{name}:</b> {value}
    </p>
  );

  renderOpeningHours = () => {
    // Locally used helper functions
    const shortenDays = (days: Day[]) => [...new Set([days[0], days[days.length - 1]])].join(' - ');
    const findByHours = (target: CompactDailyHours[], d: DailyOpeningHours) =>
      target.find((c: CompactDailyHours) => c.hours.join('') === d.openDuring.join(''));

    // Group days by opening hours using reduce
    const compactOpeningHours = this.state.place!.openingHours.reduce(
      (result: CompactDailyHours[], d: DailyOpeningHours) => {
        const foundItem = findByHours(result, d);
        foundItem ? foundItem['days'].push(d.day) : result.push({ hours: d.openDuring, days: [d.day] });
        return result;
      },
      [],
    );

    return (
      <ul>
        {compactOpeningHours.map((c: CompactDailyHours, index: number) => (
          <li key={index}>
            <b>{shortenDays(c.days)}</b>
            <br />
            {c.hours.length === 0 && 'closed'}
            {c.hours.join(' | ')}
          </li>
        ))}
      </ul>
    );
  };

  render = () => (
    <div className="ShowPlaceScreen">
      {this.state.place && (
        <Card>
          <Card.Header>
            <PlaceOpenIndicator openingHours={this.state.place.openingHours} />
            {this.state.place.id}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} sm={12}>
                <Card.Title>{this.state.place.name}</Card.Title>
                <Card.Subtitle>{this.state.place.address}</Card.Subtitle>
              </Col>
              <Col md={6} sm={12} className="mt-3 mt-md-0">
                <Card.Text>
                  <p>
                    <b>Opening Hours:</b>
                  </p>
                  {this.renderOpeningHours()}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ShowPlaceScreen;
