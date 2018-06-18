import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import { Card } from 'antd';

const { Meta } = Card;
class EventCard extends PureComponent {
  render() {
    const { name, location, date, img } = this.props.event;
    return (
      <Card
        style={{ marginBottom: '32px' }}
        hoverable
        cover={<img alt={`${name} event`} src={img} />}
      >
        <Meta
          title={name}
          description={`${moment(date).format('DD.MM.YYYY')}${
            location ? `, ${location}` : ''
          }`}
        />
      </Card>
    );
  }
}

const { shape, string } = PropTypes;
EventCard.propTypes = {
  event: shape({
    name: string,
    location: string,
    date: string,
    img: string,
  }).isRequired,
};

export default EventCard;
