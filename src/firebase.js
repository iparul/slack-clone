import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDwnhn2aqsMs2yfKAShG4TNyzSH8-UbLdo",
  authDomain: "slack-clone-e0bbd.firebaseapp.com",
  projectId: "slack-clone-e0bbd",
  storageBucket: "slack-clone-e0bbd.appspot.com",
  messagingSenderId: "620414144245",
  appId: "1:620414144245:web:614b2e4aeb5cffb1b03fbc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
