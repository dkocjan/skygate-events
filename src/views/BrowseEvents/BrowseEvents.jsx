import React from 'react';
import { Divider } from 'antd';
import EventsList from '../../components/EventsList';

const BrowseEvents = () => (
  <div>
    <Divider>
      <h1>Browse Events</h1>
    </Divider>
    <EventsList />
  </div>
);

export default BrowseEvents;
