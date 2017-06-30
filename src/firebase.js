import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAAd_ENkY1yjlqM18H5T4eQsJsz5RUL6fE",
  authDomain: "venos-beta.firebaseapp.com",
  databaseURL: "https://venos-beta.firebaseio.com",
  projectId: "venos-beta",
  storageBucket: "venos-beta.appspot.com",
  messagingSenderId: "228513945441"
}

export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}
