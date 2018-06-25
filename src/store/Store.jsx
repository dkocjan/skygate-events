import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import localforage from 'localforage';

import dummyData from './dummyData';

localforage.setDriver([localforage.INDEXEDDB]);

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
      events: null,
      loadingEvents: true,
      locationDataSource: [
        'Gliwice',
        'Katowice',
        'Kraków',
        'Warszawa',
        'Poznań',
        'Wrocław',
        'Łódź',
      ],
      filteredEvents: [],
      filterText: '',
      filterLocation: '',
      filterCategory: '',
    };
  }

  componentWillMount() {
    localforage.keys().then(keys => {
      if (keys.length === 0 || !keys) {
        localforage.getItem('0', val => {
          if (!val) {
            const events = [];

            const start = async () => {
              await dummyData.forEach(e => {
                localforage.setItem(e.id, e);
              });
              localforage
                .iterate(event => {
                  events.push(event);
                })
                .then(() => {
                  this.setState({ events });
                });
            };

            start();
          }
        });
      }
    });
  }

  componentDidMount() {
    const events = [];

    localforage
      .iterate(event => {
        events.push(event);
      })
      .then(() => {
        this.setState({ events, loadingEvents: false });
        this.filterEvents({});
      });
  }

  createEvent = event => {
    const newEvent = event;
    newEvent.id = Math.floor(Math.random() * 1000000).toString();
    newEvent.date = moment(event.date).format('YYYY-MM-DD');
    localforage.setItem(newEvent.id, newEvent, () => {
      this.setState(prevState => ({
        events: [newEvent, ...prevState.events],
      }));
    });
  };

  deleteEvent = eventId => {
    const events = [...this.state.events];
    const index = events.findIndex(event => eventId === event.id);
    events.splice(index, 1);
    localforage.removeItem(eventId, () => {
      this.setState({ events });
    });
  };

  filterEvents = ({
    filterText = this.state.filterText,
    filterLocation = this.state.filterLocation,
    filterCategory = this.state.filterCategory,
  }) => {
    const filteredEvents = this.state.events
      .filter(
        event =>
          event.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
      )
      .filter(
        event =>
          event.location.toLowerCase().indexOf(filterLocation.toLowerCase()) !==
          -1
      )
      .filter(
        event =>
          event.category.toLowerCase().indexOf(filterCategory.toLowerCase()) !==
          -1
      );

    this.setState({
      filterText,
      filterLocation,
      filterCategory,
      filteredEvents,
    });
  };

  render() {
    // data
    const {
      categories,
      events,
      locationDataSource,
      filteredEvents,
      filterText,
      filterLocation,
      filterCategory,
      loadingEvents,
    } = this.state;

    // actions
    const { createEvent, deleteEvent, filterEvents } = this;

    return (
      <StoreContext.Provider
        value={{
          // data
          categories,
          events,
          locationDataSource,
          filteredEvents,
          filterText,
          filterLocation,
          filterCategory,
          loadingEvents,

          // actions
          createEvent,
          deleteEvent,
          filterEvents,
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
