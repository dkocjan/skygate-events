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
      filterLocation: '',
      filterCategory: '',
    };
  }

  createEvent = event => {
    const newEvent = event;
    newEvent.id = Math.floor(Math.random() * 1000000).toString();
    newEvent.date = moment(event.date).format('YYYY-MM-DD');
    this.setState(prevState => ({
      events: [newEvent, ...prevState.events],
    }));
  };

  deleteEvent = eventId => {
    const array = [...this.state.events];
    const index = array.findIndex(event => eventId === event.id);
    array.splice(index, 1);
    this.setState({ events: array });
  };

  filterTextChange = filterText => {
    this.setState({ filterText });
  };

  filterLocationChange = filterLocation => {
    this.setState({ filterLocation });
  };

  filterCategoryChange = filterCategory => {
    this.setState({ filterCategory });
  };

  render() {
    // data
    const {
      categories,
      events,
      locationDataSource,
      filterText,
      filterLocation,
      filterCategory,
    } = this.state;

    // actions
    const {
      createEvent,
      deleteEvent,
      filterTextChange,
      filterLocationChange,
      filterCategoryChange,
    } = this;

    return (
      <StoreContext.Provider
        value={{
          // data
          categories,
          events,
          locationDataSource,
          filterText,
          filterLocation,
          filterCategory,

          // actions
          createEvent,
          deleteEvent,
          filterTextChange,
          filterLocationChange,
          filterCategoryChange,
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
