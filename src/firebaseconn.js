import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHIka8b1iG78bMmJKRbFrlSYOtC-5rAts",
  authDomain: "magasintrends.firebaseapp.com",
  projectId: "magasintrends",
  storageBucket: "magasintrends.appspot.com",
  messagingSenderId: "858536847989",
  appId: "1:858536847989:web:3f298447971297c68ba63c",
  measurementId: "G-DFQFW10GYZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
