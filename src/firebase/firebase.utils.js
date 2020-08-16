import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyClm12igeIPzMId8wBkGs9fChc5L85nf0g",
  authDomain: "crown-clothing-store-9adaa.firebaseapp.com",
  databaseURL: "https://crown-clothing-store-9adaa.firebaseio.com",
  projectId: "crown-clothing-store-9adaa",
  storageBucket: "crown-clothing-store-9adaa.appspot.com",
  messagingSenderId: "385685434672",
  appId: "1:385685434672:web:7cf61b2583fe1b9c5858f5",
  measurementId: "G-H4NGSJDMLB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;