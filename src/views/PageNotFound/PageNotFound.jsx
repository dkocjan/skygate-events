import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'antd';

class PageNotFound extends PureComponent {
  redirectToHomePage = e => {
    e.preventDefault();

    const {
      location: { pathname },
    } = this.props;
    const url = window.location.href;

    window.location = url.substring(0, url.length - pathname.length);
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          That page doesn{`'`}t exist <Icon type="frown-o" />
        </h1>
        <p>
          <Button type="primary" size="large" onClick={this.redirectToHomePage}>
            <Icon type="home" />
            Go back to homepage
          </Button>
        </p>
      </div>
    );
  }
}

PageNotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default PageNotFound;
