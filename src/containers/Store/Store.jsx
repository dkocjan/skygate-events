import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const StoreContext = createContext();

class Store extends Component {
  state = {
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
        description: 'Desc.......',
        location: 'Location',
        date: 'Date',
        category: 'Software Development',
        img: '',
      },
    ],
  };

  render() {
    const { categories, events } = this.state;
    return (
      <StoreContext.Provider value={{ categories, events }}>
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
