import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAikRg0uaj5D2OwqnoJQTdN7ODTdbHcR2A",
    authDomain: "shopping-db-2b7f1.firebaseapp.com",
    databaseURL: "https://shopping-db-2b7f1.firebaseio.com",
    projectId: "shopping-db-2b7f1",
    storageBucket: "shopping-db-2b7f1.appspot.com",
    messagingSenderId: "521605364437",
    appId: "1:521605364437:web:224192eafd51a55454805c"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
