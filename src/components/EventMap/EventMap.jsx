import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { Row, Col, Icon } from 'antd';
import config from '../../config';

const Marker = () => (
  <div>
    <Icon
      type="environment"
      style={{
        fontSize: '50px',
        color: '#008abd',
        transform: 'translate(-50%, -100%)',
        textShadow: '0 5px 5px rgba(0, 0 , 0 , .333)',
      }}
    />
  </div>
);

const key = config.googleKey;

class EventMap extends PureComponent {
  render() {
    const { lat, lng } = this.props.coords;
    return (
      <Row>
        <Col xs={{ span: 24, offset: 0 }}>
          {key ? (
            <div style={{ width: '100%', height: '400px' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key }}
                defaultZoom={13}
                defaultCenter={{ lat, lng }}
              >
                <Marker
                  lat={lat}
                  lng={lng}
                  style={{ width: '50px', height: '50px' }}
                />
              </GoogleMapReact>
            </div>
          ) : (
            'API key is not defined in .env file'
          )}
        </Col>
      </Row>
    );
  }
}

EventMap.propTypes = {
  coords: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default EventMap;
