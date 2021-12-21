// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  // get,
  // push,
  remove,
  ref,
  onValue,
  onChildAdded,
  // child,
} from "firebase/database";



import { getAuth ,signOut} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiCGDOWTk0A16aUyUdAAUXAf_4E_u28fA",
  authDomain: "class-practice-project-b616f.firebaseapp.com",
  projectId: "class-practice-project-b616f",
  storageBucket: "class-practice-project-b616f.appspot.com",
  messagingSenderId: "1054998713832",
  appId: "1:1054998713832:web:2a0f7fa28f9017814a405d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)


export { 
    auth,
    db,
    set,
    ref,
    onValue,
    signOut,
    onChildAdded,
    remove
    
}
