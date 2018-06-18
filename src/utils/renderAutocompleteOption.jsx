import React from 'react';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const renderAutocompleteOption = item => (
  <Option key={item} text={item}>
    {item}
  </Option>
);

export default renderAutocompleteOption;
