import React, { PureComponent } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().locale('pl'),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <h1>Find your next experience</h1>
        <form>
          <input type="text" placeholder="Search events" />
          <input type="text" placeholder="City" />
          <DatePicker
            value={this.state.date}
            format={'YYYY/MM/DD'}
            onChange={this.handleDateChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Home;
