import React from 'react';
import { Row, Col, AutoComplete, Button } from 'antd';
import { Link } from 'react-router-dom';

import { Consumer } from '../../store';
import EventCard from '../EventCard';
import SearchBox from '../SearchBox/SearchBox';
import renderAutocompleteOption from '../../utils/renderAutocompleteOption';

const EventsList = () => (
  <Consumer>
    {({
      // data
      events,
      categories,
      filterText,
      filterLocation,
      filterCategory,
      locationDataSource,

      // actions
      filterTextChange,
      filterLocationChange,
      filterCategoryChange,
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
              <SearchBox
                placeholderText="Search events"
                onInputChange={filterTextChange}
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
                onChange={filterLocationChange}
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
                onChange={filterCategoryChange}
              />
            </Col>
            <Col xs={{ span: 24 }} style={{ paddingTop: '2px' }}>
              <Button
                type="ghost"
                style={{ width: '100%' }}
                icon="close"
                onClick={e => {
                  e.preventDefault();
                  filterTextChange('');
                  filterLocationChange('');
                  filterCategoryChange('');
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
            {events
              .filter(
                event =>
                  event.name.toLowerCase().indexOf(filterText.toLowerCase()) !==
                  -1
              )
              .filter(
                event =>
                  event.location
                    .toLowerCase()
                    .indexOf(filterLocation.toLowerCase()) !== -1
              )
              .filter(
                event =>
                  event.category
                    .toLowerCase()
                    .indexOf(filterCategory.toLowerCase()) !== -1
              )
              .map(event => (
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
              ))}
          </Row>
        </Col>
      </Row>
    )}
  </Consumer>
);

export default EventsList;
