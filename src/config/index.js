import firebase, { database } from './firebase';

const config = {
  googleKey: process.env.REACT_APP_GOOGLE,
  firebase,
  database,
};

export default config;
