import React from 'react';
import { Row, Col, Divider } from 'antd';

import HomeForm from '../../containers/HomeForm/index';

const Home = () => (
  <div>
    <Row>
      <Divider>
        <h1 style={{ textAlign: 'center' }}>Find your next experience</h1>
      </Divider>
      <Col
        xs={24}
        sm={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 8, offset: 8 }}
        xxl={{ span: 4, offset: 10 }}
      >
        <HomeForm />
      </Col>
    </Row>
    <Row>
      <Divider>
        <h2 style={{ textAlign: 'center' }}>Featured events</h2>
      </Divider>
    </Row>
  </div>
);

export default Home;
