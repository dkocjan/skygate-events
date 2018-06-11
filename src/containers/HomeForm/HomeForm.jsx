import React, { PureComponent } from 'react';
import moment from 'moment';
import { Form, Input, DatePicker, Button, Icon } from 'antd';

const FormItem = Form.Item;

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      localization: '',
      date: moment().locale('pl'),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange = e => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  };

  handleLocalizationInputChange = e => {
    const localization = e.target.value;
    this.setState({ localization });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  render() {
    const state = this.state;
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem label="Event">
          <Input
            autoFocus
            type="text"
            placeholder="Search events"
            value={state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
        </FormItem>
        <FormItem label="Localization">
          <Input
            type="text"
            placeholder="City"
            value={state.localization}
            onChange={this.handleLocalizationInputChange}
          />
        </FormItem>
        <FormItem label="Date">
          <DatePicker
            style={{ width: `${100}%` }}
            value={this.state.date}
            format={'YYYY/MM/DD'}
            onChange={this.handleDateChange}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: `${100}%` }}>
            <Icon type="search" />Search
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Home;
