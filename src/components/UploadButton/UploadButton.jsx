import React from 'react';
import { Icon } from 'antd';

import './UploadButton.css';

const UploadButton = () => (
  <div>
    <Icon type="plus" className="upload-button__icon" />
    <div className="upload-button__text">Upload</div>
  </div>
);

export default UploadButton;
