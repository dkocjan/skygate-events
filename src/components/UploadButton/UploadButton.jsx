import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import './UploadButton.css';

const UploadButton = ({ loading }) => (
  <div>
    <Icon type={loading ? 'loading' : 'plus'} className="upload-button__icon" />
    <div className="upload-button__text">Upload</div>
  </div>
);

UploadButton.propTypes = {
  loading: PropTypes.bool,
};

UploadButton.defaultProps = {
  loading: false,
};

export default UploadButton;
