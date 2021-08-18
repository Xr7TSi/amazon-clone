// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDY6fgcBl5w-54JXHMuDIZRJe1-Zuh152Q",
    authDomain: "clone-14498.firebaseapp.com",
    projectId: "clone-14498",
    storageBucket: ".appspot.com",
    messagingSenderId: "991340167259",
    appId: "1:991340167259:web:bb0a6e39d71015b6fe3f7e",
    measurementId: "G-FV2FFT9NTL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };