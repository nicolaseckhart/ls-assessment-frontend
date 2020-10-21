import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ListPlacesScreen from './screens/places/ListPlacesScreen';
import ShowPlaceScreen from './screens/places/ShowPlaceScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/places" component={ListPlacesScreen} />
        <Route exact path="/places/:id" component={ShowPlaceScreen} />
        <Route exact path="/*" component={NotFoundScreen} />
      </Switch>
    </div>
  </Router>
);

export default App;
