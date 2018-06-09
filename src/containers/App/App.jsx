import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Views
import Home from '../../views/Home';
import BrowseEvents from '../../views/BrowseEvents';
import CreateEvent from '../../views/CreateEvent';

// Components
import MainMenu from '../../components/MainMenu';

const App = () => (
  <Router>
    <div>
      <MainMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={BrowseEvents} />
        <Route exact path="/create" component={CreateEvent} />
      </Switch>
    </div>
  </Router>
);

export default App;
