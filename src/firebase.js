import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyB7mgHqb4JFgYdk4vQvS3CTY9C6bNdeH9A",
  authDomain: "jimhub0.firebaseapp.com",
  projectId: "jimhub0",
  storageBucket: "jimhub0.appspot.com",
  messagingSenderId: "416275417157",
  appId: "1:416275417157:web:ac2723c9e787ddfd2f7b2c",
  measurementId: "G-586HRWK1RK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
