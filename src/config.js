//import firebase from 'firebase/app';
//import 'firebase/auth';

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAl2wwSovq79_cosmJ2qWR8rAE8kAzFndo",
    authDomain: "yours-review-diary.firebaseapp.com",
    projectId: "yours-review-diary",
    storageBucket: "yours-review-diary.appspot.com",
    messagingSenderId: "533402977580",
    appId: "1:533402977580:web:36986a824ce65a704a1889",
    measurementId: "G-9G3515VRBE"
  });

  export default firebaseConfig;