import Home from '../views/Home';
import BrowseEvents from '../views/BrowseEvents';
import CreateEvent from '../views/CreateEvent';
import Event from '../views/Event';

const indexRoutes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/skygate-events/', name: 'Home', component: Home },
  {
    path: '/skygate-events/events',
    name: 'Browse Events',
    component: BrowseEvents,
  },
  {
    path: '/skygate-events/create',
    name: 'Create Event',
    component: CreateEvent,
  },
  {
    path: '/skygate-events/event/:id',
    name: 'Event',
    component: Event,
  },
];

export default indexRoutes;
