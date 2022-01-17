// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, onSnapshot, getDocs, getDoc, doc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);
const db = getFirestore();
export { db, collection, query, onSnapshot, getDocs, getDoc, doc  }