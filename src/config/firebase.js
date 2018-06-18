import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: 'skygate-events-207514.firebaseapp.com',
  databaseURL: 'https://skygate-events-207514.firebaseio.com',
  projectId: 'skygate-events-207514',
  storageBucket: '',
  messagingSenderId: '826091385685',
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
