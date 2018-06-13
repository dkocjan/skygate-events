import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCVcmqD4r0TL2XTYbpYBwLBoM7h6xptzKc',
  authDomain: 'skygate-events.firebaseapp.com',
  databaseURL: 'https://skygate-events.firebaseio.com',
  projectId: 'skygate-events',
  storageBucket: 'skygate-events.appspot.com',
  messagingSenderId: '499648093842',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
