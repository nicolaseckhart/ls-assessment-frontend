import React, { ChangeEvent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';

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
      <p>There is no list of places yet, but you can search by place id here:</p>
      <input type="text" value={this.state.placeId} onChange={this.handleSearchInputChange} />
      <Link to={`/places/${this.state.placeId}`}>Search</Link>
    </div>
  );
}

export default ListPlacesScreen;
