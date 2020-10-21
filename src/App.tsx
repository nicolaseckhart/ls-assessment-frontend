import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ListPlacesScreen from './screens/places/ListPlacesScreen';
import ShowPlaceScreen from './screens/places/ShowPlaceScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import { Container, Navbar, Nav } from 'react-bootstrap';

const App: React.FC = () => (
  <Router>
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src="https://www.localsearch.ch/files/upload/469_22ad1521ca.svg"
                width="115"
                height="30"
                className="d-inline-block align-top"
              />
              Assessment
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/places">
                <Nav.Item>Places</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/places" component={ListPlacesScreen} />
          <Route exact path="/places/:id" component={ShowPlaceScreen} />
          <Route exact path="/*" component={NotFoundScreen} />
        </Switch>
      </Container>
    </div>
  </Router>
);

export default App;
