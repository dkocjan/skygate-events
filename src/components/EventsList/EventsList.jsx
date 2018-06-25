import React from 'react';
import { Row, Col, AutoComplete, Button, Divider, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Consumer } from '../../store';
import EventCard from '../EventCard';

const EventsList = () => {
  const { Option } = AutoComplete;
  const renderAutocompleteOption = item => (
    <Option key={item} text={item}>
      {item}
    </Option>
  );

  return (
    <Consumer>
      {({
        // data
        filteredEvents,
        categories,
        filterText,
        filterLocation,
        filterCategory,
        locationDataSource,
        loadingEvents,

        // actions
        filterEvents,
      }) => (
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 22, offset: 1 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Row
              gutter={{ xs: 16, sm: 16, md: 24 }}
              style={{ padding: '16px', marginBottom: '32px' }}
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 8 }}
                style={{ margin: '4px 0' }}
              >
                <Input
                  value={filterText}
                  placeholder="Event"
                  onChange={e => filterEvents({ filterText: e.target.value })}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                style={{ margin: '4px 0' }}
              >
                <AutoComplete
                  style={{ width: '100%' }}
                  placeholder="Location"
                  value={filterLocation}
                  backfill
                  dataSource={locationDataSource.map(renderAutocompleteOption)}
                  onChange={location => {
                    filterEvents({ filterLocation: location });
                  }}
                />
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                style={{ margin: '4px 0' }}
              >
                <AutoComplete
                  style={{ width: '100%' }}
                  placeholder="Category"
                  value={filterCategory}
                  backfill
                  dataSource={categories.map(renderAutocompleteOption)}
                  onChange={category => {
                    filterEvents({ filterCategory: category });
                  }}
                />
              </Col>
              <Col xs={{ span: 24 }} style={{ paddingTop: '2px' }}>
                <Button
                  type="ghost"
                  style={{ width: '100%' }}
                  icon="close"
                  onClick={e => {
                    e.preventDefault();
                    filterEvents({
                      filterText: '',
                      filterLocation: '',
                      filterCategory: '',
                    });
                  }}
                >
                  Clear form
                </Button>
              </Col>
            </Row>
            <Row
              gutter={{ xs: 16, sm: 16, md: 24 }}
              style={{ padding: '0 16px' }}
            >
              {!loadingEvents && filteredEvents ? (
                filteredEvents.map(event => (
                  <Col
                    key={event.id || event.date}
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                  >
                    <Link to={`/event/${event.id}`}>
                      <EventCard event={event} />
                    </Link>
                  </Col>
                ))
              ) : (
                <Divider>
                  <Icon type="loading" />
                </Divider>
              )}
            </Row>
          </Col>
        </Row>
      )}
    </Consumer>
  );
};

export default EventsList;
