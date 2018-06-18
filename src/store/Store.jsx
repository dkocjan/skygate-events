import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
      events: [
        {
          id: '0',
          name: 'Skygate React Workshops',
          description: 'lorem ipsum',
          date: '2018-07-13',
          location: 'Gliwice',
          category: 'Software Development',
          img: 'https://placeimg.com/640/480/tech',
        },
        {
          id: '1',
          name: 'Test party',
          description: 'lorem ipsum',
          date: '2018-06-23',
          location: 'Katowice',
          category: 'Party',
          img: 'https://placeimg.com/640/480/animals',
        },
        {
          id: '2',
          name: 'Test music',
          description: 'lorem ipsum',
          date: '2018-06-29',
          location: 'Kraków',
          category: 'Music',
          img: 'https://placeimg.com/640/480/animals',
        },
        {
          id: '3',
          name: 'Test science & tech',
          description: 'lorem ipsum',
          date: '2018-07-05',
          location: 'Szczecin',
          category: 'Science & Tech',
          img: 'https://placeimg.com/640/480/animals',
        },
        {
          id: '4',
          name: '2018 FIFA World Cup Final',
          description: 'lorem ipsum',
          date: '2018-07-15',
          location: 'Moscow',
          category: 'Sports',
          img: 'https://placeimg.com/640/480/animals',
        },
        {
          id: '5',
          name: 'New Years Eve',
          description: '2019',
          date: '2018-12-31',
          location: '',
          category: 'Party',
          img: 'https://placeimg.com/640/480/animals',
        },
        {
          id: '6',
          name: 'Another test party',
          description: 'lorem ipsum',
          date: '2018-06-24',
          location: 'Poznań',
          category: 'Party',
          img: 'https://placeimg.com/640/480/animals',
        },
        {
          id: '7',
          name: 'Skygate Internship 2018',
          description: 'Gliwice',
          date: '2018-07-02',
          location: 'Gliwice',
          category: 'Software Development',
          img: 'https://placeimg.com/640/480/animals',
        },
      ],
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

  render() {
    // data
    const { categories, events, locationDataSource } = this.state;

    // actions
    const { createEvent } = this;

    return (
      <StoreContext.Provider
        value={{
          // data
          categories,
          events,
          locationDataSource,

          // actions
          createEvent,
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
