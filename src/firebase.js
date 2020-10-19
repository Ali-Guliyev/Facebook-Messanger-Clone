import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYDI1Os8seAfiwEcsMJhsmBnc2ODWoP14",
  authDomain: "facebook-messanger-clone-9a1bd.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-9a1bd.firebaseio.com",
  projectId: "facebook-messanger-clone-9a1bd",
  storageBucket: "facebook-messanger-clone-9a1bd.appspot.com",
  messagingSenderId: "404017950473",
  appId: "1:404017950473:web:fc546a40c7ed5a0068add8",
  measurementId: "G-4MWRFYGFP1",
});

const db = firebaseApp.firestore();

export default db;
