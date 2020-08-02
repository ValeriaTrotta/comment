import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDGECmmAxnjqkOkv3TadWmwt_Ei4siFXtQ",
  authDomain: "comment-ef775.firebaseapp.com",
  databaseURL: "https://comment-ef775.firebaseio.com",
  projectId: "comment-ef775",
  storageBucket: "comment-ef775.appspot.com",
  messagingSenderId: "765779605868",
  appId: "1:765779605868:web:ac89050cd766d8f43c9b49",
  measurementId: "G-MPRC8D9NH9",
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
