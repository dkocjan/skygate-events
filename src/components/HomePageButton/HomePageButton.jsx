import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class HomePageButton extends PureComponent {
  redirectToHomePage = e => {
    e.preventDefault();

    const { pathname } = this.props;
    const url = window.location.href;

    window.location = url.substring(0, url.length - pathname.length);
  };

  render() {
    return (
      <Button
        type="primary"
        size="large"
        onClick={this.redirectToHomePage}
        icon="home"
        htmlType="button"
      >
        {this.props.buttonText}
      </Button>
    );
  }
}

HomePageButton.propTypes = {
  buttonText: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

HomePageButton.defaultProps = {
  buttonText: 'Go back to homepage',
};

export default HomePageButton;
