import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASfda1FL6Y8aXEel3nEliA8IukyPG0OMo",
    authDomain: "challenge-90bac.firebaseapp.com",
    projectId: "challenge-90bac",
    storageBucket: "challenge-90bac.appspot.com",
    messagingSenderId: "118715250538",
    appId: "1:118715250538:web:0ecf9ecd7b24b680199713",
    measurementId: "G-8CB1SNWFN9"
  };


  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
export default firebase;