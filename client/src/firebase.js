// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-abhi.firebaseapp.com",
  projectId: "mern-blog-abhi",
  storageBucket: "mern-blog-abhi.appspot.com",
  messagingSenderId: "983985138875",
  appId: "1:983985138875:web:a0f3f82800cfdeafce8d9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
