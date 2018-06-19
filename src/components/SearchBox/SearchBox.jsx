import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

class SearchBox extends PureComponent {
  render() {
    const { Search } = Input;
    return (
      <Search
        placeholder={this.props.placeholderText}
        onChange={this.props.onInputChange}
        style={{ width: '100%' }}
      />
    );
  }
}

SearchBox.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default SearchBox;
