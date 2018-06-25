import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { Row, Col, Card, Button, Divider, Icon } from 'antd';

import config from '../../config';
import EventMap from '../../components/EventMap/EventMap';
import { Consumer } from '../../store';

const API_KEY = config.googleKey;
const API_URL = `/maps/api/place/textsearch/json?key=${API_KEY}&query=`;

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.event,
      lat: null,
      lng: null,

      isMounted: false,
    };
  }

  componentDidMount() {
    this.onMount(() => {
      if (this.state.location) {
        axios.get(`${API_URL}${this.props.event.location}`).then(res => {
          const pos = res.data.results[0].geometry.location;
          if (this.state.isMounted) {
            this.setPosition(pos);
          }
        });
      }
    });
  }

  componentWillUnmount() {
    this.setState({
      isMounted: false,
    });
  }

  onMount = cb => {
    this.setState({
      isMounted: true,
    });
    cb();
  };

  setPosition(pos) {
    this.setState({ lat: pos.lat, lng: pos.lng });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.history.push('/events');
  }

  render() {
    const { id, name, description, location, date, img, lat, lng } = this.state;

    return (
      <Consumer>
        {({ deleteEvent }) => (
          <Row>
            <Col
              xs={{ span: 22, offset: 1 }}
              sm={{ span: 20, offset: 2 }}
              lg={{ span: 16, offset: 4 }}
              xl={{ span: 12, offset: 6 }}
            >
              <Card
                title={name}
                style={{ width: '100%' }}
                cover={<img src={img} alt={`${name} event`} />}
                extra={`${moment(date).format('DD.MM.YYYY')}${
                  location ? `, ${location}` : ''
                }`}
                actions={[
                  <Link to="/events">
                    <Button type="primary" size="large" icon="arrow-left">
                      Back
                    </Button>
                  </Link>,
                  <Button type="dashed" size="large" icon="edit">
                    Edit
                  </Button>,
                  <Button
                    type="danger"
                    size="large"
                    icon="delete"
                    onClick={e => {
                      deleteEvent(id);
                      this.handleDelete(e);
                    }}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Divider>
                  <h2>{name}</h2>
                </Divider>
                <p
                  style={{
                    padding: '0 24px',
                    margin: '96px 0',
                    fontSize: '16px',
                  }}
                >
                  {description}
                </p>
                {this.state.lat && this.state.isMounted ? (
                  <EventMap
                    isMounted={this.state.isMounted}
                    coords={{ lat, lng }}
                  />
                ) : (
                  <Divider>
                    <Icon type="loading" />
                  </Divider>
                )}
                <p
                  style={{
                    margin: '48px 0',
                    textAlign: 'center',
                    fontSize: '16px',
                  }}
                >
                  {location
                    ? `See you in ${location} at ${moment(date).format('LL')}! `
                    : `See you at ${moment(date).format('LL')}! `}
                </p>
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <Icon type="smile-o" style={{ fontSize: '48px' }} />
                </div>
              </Card>
            </Col>
          </Row>
        )}
      </Consumer>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(EventDetails);
