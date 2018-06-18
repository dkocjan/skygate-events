import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';

import { Consumer } from '../../store';

class Event extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id } = this.props.match.params;

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

    return (
      <Consumer>
        {({ events }) =>
          events[id] ? (
            <div>{events[id].name}</div>
          ) : (
            <EventNotFound notFoundId={id} />
          )
        }
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
