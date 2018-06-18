import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';

import HomePageButton from '../../components/HomePageButton';

class PageNotFound extends PureComponent {
  render() {
    const { pageNotFoundText, pathname } = this.props;
    return (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{ textAlign: 'center', height: '100vh' }}
      >
        <Col>
          <h1>
            {pageNotFoundText} <Icon type="frown-o" />
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
  pathname: PropTypes.string.isRequired,
};

PageNotFound.defaultProps = {
  pageNotFoundText: `That page doesn't exist`,
};

export default PageNotFound;
