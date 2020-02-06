import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyD8_fNXY0icoZksysDId42aMPoBVo6Ub-g",
    authDomain: "arango-a9376.firebaseapp.com",
    databaseURL: "https://arango-a9376.firebaseio.com",
    projectId: "arango-a9376",
    storageBucket: "arango-a9376.appspot.com",
    messagingSenderId: "833506846439",
    appId: "1:833506846439:web:cdd636fd4e526d10472442"
  };

firebase.initializeApp(config);

export const storage = firebase.storage();
export const auth = firebase.auth();
export default firebase;