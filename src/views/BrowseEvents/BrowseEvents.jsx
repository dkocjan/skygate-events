import React from 'react';
import { Divider } from 'antd';
import { Consumer } from '../../store';

const BrowseEvents = () => (
  <div>
    <Divider>
      <h1>BrowseEvents</h1>
    </Divider>
    <Consumer>
      {({ events }) =>
        events.map(event => (
          <div key={event.id || event.date || event.name}>{event.name}</div>
        ))
      }
    </Consumer>
  </div>
);

export default BrowseEvents;
