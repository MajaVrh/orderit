// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA02zjX15j6yNK494t-8YxBXw4sVW-mzhI",
  authDomain: "orderit-dc769.firebaseapp.com",
  projectId: "orderit-dc769",
  storageBucket: "orderit-dc769.appspot.com",
  messagingSenderId: "163198399753",
  appId: "1:163198399753:web:a0429aaa66e9d4af0d0fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }