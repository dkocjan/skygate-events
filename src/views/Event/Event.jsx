import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Divider } from 'antd';

import { Consumer } from '../../store';
import EventDetails from '../../containers/EventDetails';

class Event extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const EventNotFound = ({ notFoundId }) => (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{ textAlign: 'center', height: '100vh' }}
      >
        <Col>
          <h1>
            Event with id {notFoundId} doesn{`'`}t exist <Icon type="frown-o" />
          </h1>
        </Col>
      </Row>
    );

    const { id } = this.props.match.params;
    return (
      <Consumer>
        {({ events }) => {
          if (events) {
            const index = events.findIndex(event => event.id === id);
            return index !== -1 ? (
              <EventDetails event={events[index]} />
            ) : (
              <EventNotFound notFoundId={id} />
            );
          }
          return (
            <Divider>
              <Icon type="loading" />
            </Divider>
          );
        }}
      </Consumer>
    );
  }
}

const { shape, string } = PropTypes;
Event.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default Event;
