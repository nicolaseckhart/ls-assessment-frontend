import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => (
  <div className="HomeScreen">
    <h1>Home</h1>
    <p>Welcome to this assessment!</p>
    <Link to="/places">Check out these awesome places!</Link>
  </div>
);

export default HomeScreen;
