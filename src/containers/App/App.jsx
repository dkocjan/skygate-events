import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import AppLayout from '../AppLayout/index';

// Store
import Store from '../../store';

const App = () => (
  <Store>
    <Router>
      <Route render={({ location }) => <AppLayout location={location} />} />
    </Router>
  </Store>
);

export default App;
