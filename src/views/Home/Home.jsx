import React from 'react';
import { Row, Col, Divider } from 'antd';

import Hero from '../../components/Hero';
import HomeForm from '../../containers/HomeForm/index';

const Home = () => (
  <div>
    <Row>
      <Hero />
      <Divider>
        <h2>Search for your dream event</h2>
      </Divider>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 12, offset: 6 }}
      >
        <HomeForm />
      </Col>
    </Row>
  </div>
);

export default Home;
