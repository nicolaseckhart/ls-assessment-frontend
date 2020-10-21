import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from "react-bootstrap";

const NotFoundScreen: React.FC = () => (
  <Jumbotron>
    <h1>404 Not Found</h1>
    <p>The resource you requested was not found.</p>
    <Link to="/">Home</Link>
  </Jumbotron>
);

export default NotFoundScreen;
