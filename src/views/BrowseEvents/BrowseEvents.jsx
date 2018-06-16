import React from 'react';
import { Divider } from 'antd';
import { Consumer } from '../../containers/Store';

const BrowseEvents = () => (
  <div>
    <Divider>
      <h1>BrowseEvents</h1>
    </Divider>
    <Consumer>
      {({ events }) =>
        events.map(event => <div key={event.id}>{event.name}</div>)
      }
    </Consumer>
  </div>
);

export default BrowseEvents;
