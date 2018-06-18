import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Card } from 'antd';

import config from '../../config';
import EventMap from '../../components/EventMap/EventMap';

const API_KEY = config.key;
const API_URL = `http://cors.io/?https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=`;

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRFToken': 'example-of-custom-header',
  'Content-Type': 'application/json; charset=UTF-8',
  'X-Frame-Options': 'SAMEORIGIN',
};

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.event,
      lat: 50.29449229999999,
      lng: 18.6713802,
    };
  }

  componentWillMount() {
    axios.get(`${API_URL}${this.props.event.location}`);
  }

  render() {
    const {
      name,
      description,
      location,
      date,
      category,
      img,
      lat,
      lng,
    } = this.state;

    return (
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 12, offset: 6 }}
        >
          <Card title={name} style={{ width: '100%' }}>
            <img src={img} alt={`${name} event`} />
            <p>{date}</p>
            <p>{location}</p>
            <p>{category}</p>
            <p>{description}</p>
            <EventMap
              coords={{ lat, lng }}
              style={{ width: '400px', height: '400px' }}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

const { shape, string } = PropTypes;
EventDetails.propTypes = {
  event: shape({
    id: string,
    name: string,
    description: string,
    location: string,
    img: string,
    date: string,
    category: string,
  }).isRequired,
};

export default EventDetails;
