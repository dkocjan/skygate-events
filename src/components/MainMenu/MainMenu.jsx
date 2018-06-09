import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/events">Browse Events</Link>
    <Link to="/create">Create Event</Link>
  </nav>
);

export default MainMenu;
