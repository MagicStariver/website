// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHW8gPuNSVstSV0ytE8oB5-_3PJKvxgMA",
  authDomain: "muzica-93e9c.firebaseapp.com",
  projectId: "muzica-93e9c",
  storageBucket: "muzica-93e9c.appspot.com",
  messagingSenderId: "559137569600",
  appId: "1:559137569600:web:081ec42350a9f8099658a5",
  measurementId: "G-G5MCSMD8H0",
  databaseURL:"https://muzica-93e9c-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);