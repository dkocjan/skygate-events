import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

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
          id: 0,
          name: 'Concert',
          description: 'Desc.......',
          location: 'Location',
          date: 'Date',
          category: 'Music',
          img: '',
        },
        {
          id: 1,
          name: 'React workshops',
          description: 'Skygate React workshops',
          location: 'Gliwice',
          date: 'Date',
          category: 'Software Development',
          img: '',
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

  createNewEvent = event => {
    this.setState(prevState => ({
      events: [...prevState.events, event],
    }));
  };

  render() {
    // data
    const { categories, events, locationDataSource } = this.state;

    // actions
    const { createNewEvent } = this;

    return (
      <StoreContext.Provider
        value={{
          // data
          categories,
          events,
          locationDataSource,

          // actions
          createNewEvent,
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
