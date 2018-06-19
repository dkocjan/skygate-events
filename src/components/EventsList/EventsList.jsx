import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { Consumer } from '../../store';
import EventCard from '../EventCard';
import SearchBox from '../SearchBox/SearchBox';

const EventsList = () => (
  <Consumer>
    {({ events, filterText, filterTextChange }) => (
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 22, offset: 1 }}
          lg={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}
        >
          <Row
            gutter={{ xs: 16, sm: 16, md: 24 }}
            style={{ padding: '16px', marginBottom: '32px' }}
          >
            <Col>
              <SearchBox
                placeholderText="Search events"
                onInputChange={filterTextChange}
              />
            </Col>
          </Row>
          <Row gutter={{ xs: 16, sm: 16, md: 24 }} style={{ padding: '16px' }}>
            {events
              .reverse()
              .filter(
                event =>
                  event.name
                    .concat(` ${event.location}`)
                    .toLowerCase()
                    .indexOf(filterText.toLowerCase()) !== -1
              )
              .map(event => (
                <Col
                  key={event.id || event.date}
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                >
                  <Link to={`/event/${event.id}`}>
                    <EventCard event={event} />
                  </Link>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    )}
  </Consumer>
);

export default EventsList;
