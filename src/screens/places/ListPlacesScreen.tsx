import React, { ChangeEvent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import {Col, Form, Jumbotron, Row} from 'react-bootstrap';

interface State {
  placeId: string;
}

class ListPlacesScreen extends React.Component<RouteChildrenProps<{}>, State> {
  constructor(props: RouteChildrenProps<{}>) {
    super(props);
    this.state = { placeId: '' };
  }

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ placeId: event.target.value });
  };

  searchPlace = () => {
    this.props.history.push(`/places/${this.state.placeId}`);
  };

  render = () => (
    <div className="ListPlacesScreen">
      <h1>Places List</h1>

      <Jumbotron className="mt-4">
        <p className="lead">
          There is no list of places yet, but you can search by place id. Example identifiers your can search for are
          <code>GXvPAor1ifNfpF0U5PTG0w</code> or <code>ohGSnJtMIC5nPfYRi_HTAg</code>.
        </p>
      </Jumbotron>

      <Form.Group as={Row}>
        <Col sm={9}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter a place identifier"
            value={this.state.placeId}
            onChange={this.handleSearchInputChange}
          />
        </Col>
        <Col sm={3}>
          <Link className="btn-lg btn btn-default" to={`/places/${this.state.placeId}`}>Search</Link>
        </Col>
      </Form.Group>

    </div>
  );
}

export default ListPlacesScreen;
