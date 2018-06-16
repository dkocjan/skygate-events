import React, { PureComponent } from 'react';
import moment from 'moment';
import { Form, Input, DatePicker, Button } from 'antd';

const FormItem = Form.Item;

class Home extends PureComponent {
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

  handleDateChange = date => {
    this.setState({ date });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { state } = this;
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem label="Event">
          <Input
            autoFocus
            size="large"
            type="text"
            placeholder="Search events"
            data="searchTerm"
            value={state.searchTerm}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Location">
          <Input
            size="large"
            type="text"
            placeholder="City"
            data="location"
            value={state.location}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Date">
          <DatePicker
            size="large"
            style={{ width: `${100}%` }}
            data="date"
            value={this.state.date}
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

export default Home;
