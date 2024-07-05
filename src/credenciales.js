// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBawJo7VyYXXrFAczfrLRyXbOJgPHS5mhU",
  authDomain: "oeew-40572.firebaseapp.com",
  projectId: "oeew-40572",
  storageBucket: "oeew-40572.appspot.com",
  messagingSenderId: "1092703418249",
  appId: "1:1092703418249:web:1f77b0b57276e4a1b9d358"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase