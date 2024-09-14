// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC6X76Zl-Ac5F5gHJdTzG7ySWTtYrWBmqU",
  authDomain: "medium-clone-fbb23.firebaseapp.com",
  projectId: "medium-clone-fbb23",
  storageBucket: "medium-clone-fbb23.appspot.com",
  messagingSenderId: "621055684944",
  appId: "1:621055684944:web:d9b5893a84975658403c55",
  measurementId: "G-PCSSMLV429"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
