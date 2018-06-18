import React, { PureComponent } from 'react';
import moment from 'moment';
import { Form, Input, DatePicker, Button, AutoComplete } from 'antd';

import { Consumer } from '../../store';
import renderAutocompleteOption from '../../utils/renderAutocompleteOption';

const FormItem = Form.Item;

class HomeForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      location: '',
      date: moment(),
    };
  }

  handleInputChange = e => {
    const data = e.target.attributes.data.value;
    this.setState({ [data]: e.target.value });
  };

  handleLocationChange = location => {
    this.setState({ location });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { searchTerm, location, date } = this.state;
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem label="Event">
          <Input
            autoFocus
            size="large"
            type="text"
            placeholder="Search events"
            data="searchTerm"
            value={searchTerm}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Location">
          <Consumer>
            {({ locationDataSource }) => (
              <AutoComplete
                size="large"
                placeholder="City"
                data="location"
                value={location}
                backfill
                dataSource={locationDataSource.map(renderAutocompleteOption)}
                onChange={this.handleLocationChange}
              />
            )}
          </Consumer>
        </FormItem>
        <FormItem label="Date">
          <DatePicker
            placeholder="Anytime"
            size="large"
            style={{ width: `${100}%` }}
            data="date"
            value={date}
            format={'YYYY/MM/DD'}
            onChange={this.handleDateChange}
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: `${100}%` }}
            icon="search"
          >
            Search
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default HomeForm;
