import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import dummyData from './dummyData';

const StoreContext = createContext();

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        'Music',
        'Sports',
        'Science & Tech',
        'Software Development',
        'Party',
      ],
      events: dummyData,
      locationDataSource: [
        'Gliwice',
        'Katowice',
        'Kraków',
        'Wrocław',
        'Warszawa',
        'Poznań',
        'Trójmiasto',
        'Łódź',
        'Częstochowa',
        'Szczecin',
      ],
      filterText: '',
    };
  }

  createEvent = event => {
    const newEvent = event;
    newEvent.id = Math.floor(Math.random() * 1000000).toString();
    newEvent.date = moment(event.date).format('YYYY-MM-DD');
    this.setState(prevState => ({
      events: [...prevState.events, newEvent],
    }));
  };

  deleteEvent = eventId => {
    const array = [...this.state.events];
    const index = array.findIndex(event => eventId === event.id);
    array.splice(index, 1);
    this.setState({ events: array });
  };

  filterTextChange = e => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    // data
    const { categories, events, locationDataSource, filterText } = this.state;

    // actions
    const { createEvent, deleteEvent, filterTextChange } = this;

    return (
      <StoreContext.Provider
        value={{
          // data
          categories,
          events,
          locationDataSource,
          filterText,

          // actions
          createEvent,
          deleteEvent,
          filterTextChange,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

const { Consumer } = StoreContext;

export { Consumer };
export default Store;
