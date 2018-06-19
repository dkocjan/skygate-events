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
                localforage.setItem(e.id, e, event => console.log(event));
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
          console.log('dummyData injected');
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
      loadingEvents,
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
          loadingEvents,

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
