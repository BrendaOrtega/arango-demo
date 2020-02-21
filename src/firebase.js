import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAOepoLEXggnOttamjn7R0Q0rUsh7-rUH0",
    authDomain: "book-75798.firebaseapp.com",
    databaseURL: "https://book-75798.firebaseio.com",
    projectId: "book-75798",
    storageBucket: "book-75798.appspot.com",
    messagingSenderId: "1059804146557",
    appId: "1:1059804146557:web:edfc86efc8537515ebba14"
  };

  export const firebaseui={
    signInFlow:"popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }

firebase.initializeApp(config);

export const storage = firebase.storage();
export const auth = firebase.auth();
export default firebase;