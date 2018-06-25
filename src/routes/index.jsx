import Home from '../views/Home';
import BrowseEvents from '../views/BrowseEvents';
import CreateEvent from '../views/CreateEvent';
import Event from '../views/Event';

const indexRoutes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/events',
    name: 'Browse Events',
    component: BrowseEvents,
  },
  {
    path: '/create',
    name: 'Create Event',
    component: CreateEvent,
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: Event,
  },
];

export default indexRoutes;
