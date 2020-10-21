import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundScreen: React.FC = () => (
  <div className="NotFoundScreen">
    <h1>404 Not Found</h1>
    <p>The resource you requested was not found.</p>
    <Link to="/">Home</Link>
  </div>
);

export default NotFoundScreen;
