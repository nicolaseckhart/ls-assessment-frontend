import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { DailyOpeningHours, Place } from '../../shared';

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

  render = () => (
    <div className="ShowPlaceScreen">
      {this.state.place && (
        <div>
          <h1>{this.state.place.name}</h1>
          {this.renderPlaceAttribute('Identifier', this.state.place.id)}
          {this.renderPlaceAttribute('Address', this.state.place.address)}
          <p>
            <b>Opening Hours:</b>
          </p>
          <ul>
            {this.state.place.openingHours.map((dailyOpeningHours: DailyOpeningHours, index: number) => (
              <li key={index}>
                <b>{dailyOpeningHours.day}:</b> {dailyOpeningHours.openDuring.join(' | ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowPlaceScreen;
