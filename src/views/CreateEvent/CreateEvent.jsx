import React from 'react';
import { Row, Col, Divider } from 'antd';

import CreateEventForm from '../../containers/CreateEventForm';

const CreateEvent = () => (
  <div>
    <Row>
      <Divider>
        <h1 style={{ textAlign: 'center' }}>Create Event</h1>
      </Divider>
      <Col
        xs={24}
        sm={{ span: 18, offset: 3 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 12, offset: 6 }}
      >
        <CreateEventForm />
      </Col>
    </Row>
  </div>
);

export default CreateEvent;
