import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  // DatePicker,
  Button,
  AutoComplete,
} from 'antd';

import { Consumer } from '../../store';
import renderAutocompleteOption from '../../utils/renderAutocompleteOption';

const FormItem = Form.Item;

class HomeForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      location: '',
      // date: null,
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
    this.props.history.push(`/events`);
  };

  render() {
    const {
      searchTerm,
      location,
      // date
    } = this.state;
    return (
      <Consumer>
        {({ filterTextChange, filterLocationChange, locationDataSource }) => (
          <Form
            layout="vertical"
            onSubmit={e => {
              this.handleSubmit(e);
              filterTextChange(this.state.searchTerm);
              filterLocationChange(this.state.location);
            }}
          >
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
              <AutoComplete
                size="large"
                placeholder="Location"
                data="location"
                value={location}
                backfill
                dataSource={locationDataSource.map(renderAutocompleteOption)}
                onChange={this.handleLocationChange}
              />
            </FormItem>
            {/* <FormItem label="Date">
          <DatePicker
            placeholder="Anytime"
            size="large"
            style={{ width: `${100}%` }}
            data="date"
            value={date}
            format="DD.MM.YYYY"
            onChange={this.handleDateChange}
          />
        </FormItem> */}
            <FormItem>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{ width: `${100}%` }}
                icon="search"
                ghost={!this.state.searchTerm && !this.state.location}
              >
                Search
              </Button>
            </FormItem>
          </Form>
        )}
      </Consumer>
    );
  }
}

HomeForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(HomeForm);
