import Home from '../views/Home';
import BrowseEvents from '../views/BrowseEvents';
import CreateEvent from '../views/CreateEvent';

const indexRoutes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/events', name: 'Browse Events', component: BrowseEvents },
  { path: '/create', name: 'Create Event', component: CreateEvent },
];

export default indexRoutes;
