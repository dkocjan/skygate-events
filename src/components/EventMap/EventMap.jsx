import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker } from 'react-google-maps';

class EventMap extends PureComponent {
  render() {
    const { lat, lng } = this.props.coords;
    return (
      <GoogleMap defaultZoom={17} defaultCenter={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
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
