import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD3r15wsevr1hD2uwRBAfCKPhHoStRPzes",
  authDomain: "just-clock-it-77244.firebaseapp.com",
  databaseURL: "https://just-clock-it-77244.firebaseio.com",
  projectId: "just-clock-it-77244",
  storageBucket: "just-clock-it-77244.appspot.com",
  messagingSenderId: "344381351463",
  appId: "1:344381351463:web:360c8564dca5d66c739002"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
