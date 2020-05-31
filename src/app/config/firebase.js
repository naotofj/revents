import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'revents-fb-27384.firebaseapp.com',
  databaseURL: 'https://revents-fb-27384.firebaseio.com',
  projectId: 'revents-fb-27384',
  storageBucket: 'revents-fb-27384.appspot.com',
  messagingSenderId: '23707004958',
  appId: '1:23707004958:web:95ee7ac40636843e17fe0f',
};

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore();
}

export default firebase;
