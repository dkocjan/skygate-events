import React from 'react';
import PropTypes from 'prop-types';
import './slide.css';

const Slide = ({ img, text, description }) => (
  <div style={{ backgroundImage: `url('${img}')` }} className="slide">
    <div className="slide__text-wrapper">
      <h1 className="slide__heading">{text}</h1>
      <p className="slide__description">{description}</p>
    </div>
    <div className="slide__overlay" />
  </div>
);

Slide.propTypes = {
  img: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Slide.defaultProps = {
  description: '',
};

export default Slide;
