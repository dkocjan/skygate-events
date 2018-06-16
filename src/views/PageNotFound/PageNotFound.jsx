import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';

import HomePageButton from '../../components/HomePageButton';

class PageNotFound extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{ textAlign: 'center', height: '100vh' }}
      >
        <Col>
          <h1>
            {this.props.pageNotFoundText} <Icon type="frown-o" />
          </h1>
          <p>
            <HomePageButton pathname={pathname} />
          </p>
        </Col>
      </Row>
    );
  }
}

PageNotFound.propTypes = {
  pageNotFoundText: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

PageNotFound.defaultProps = {
  pageNotFoundText: `That page doesn't exist`,
};

export default PageNotFound;
