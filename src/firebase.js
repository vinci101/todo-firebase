// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbIVw8gQSVygAfC_3eHUpOi73GC90wMuc",
  authDomain: "vin-todo-91ef2.firebaseapp.com",
  projectId: "vin-todo-91ef2",
  storageBucket: "vin-todo-91ef2.appspot.com",
  messagingSenderId: "106330124685",
  appId: "1:106330124685:web:2382158dc7f36d3827cdc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
