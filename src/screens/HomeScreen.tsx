import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from "react-bootstrap";

const HomeScreen: React.FC = () => (
  <Jumbotron>
    <h1>Home</h1>
    <p>Welcome to this assessment!</p>
    <Link to="/places">Check out all these places!</Link>
  </Jumbotron>
);

export default HomeScreen;
