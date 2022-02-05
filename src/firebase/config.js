import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3HsaZBmNlKfLCIua9Y9qT5UD_ws5gMA",
  authDomain: "mymoney-98236.firebaseapp.com",
  projectId: "mymoney-98236",
  storageBucket: "mymoney-98236.appspot.com",
  messagingSenderId: "681639278587",
  appId: "1:681639278587:web:71ae80dab3a08869853d5e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
