import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import AppLayout from '../../containers/AppLayout';

// Store
import Store from '../../containers/Store';

const App = () => (
  <Store>
    <Router>
      <Route render={({ location }) => <AppLayout location={location} />} />
    </Router>
  </Store>
);

export default App;
