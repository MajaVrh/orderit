import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyA02zjX15j6yNK494t-8YxBXw4sVW-mzhI",
    authDomain: "orderit-dc769.firebaseapp.com",
    projectId: "orderit-dc769",
    storageBucket: "orderit-dc769.appspot.com",
    messagingSenderId: "163198399753",
    appId: "1:163198399753:web:c2695d22088bdd090d0fd8"
  };
  
 initializeApp(firebaseConfig);

 const auth= getAuth();

 export {auth, signInWithEmailAndPassword,signOut,onAuthStateChanged};

 