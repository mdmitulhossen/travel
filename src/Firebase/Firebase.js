// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9oZJZa0cmxuJBxUuSRSJlR4Ps2vum9RI",
  authDomain: "ghuraghuri-d46d4.firebaseapp.com",
  projectId: "ghuraghuri-d46d4",
  storageBucket: "ghuraghuri-d46d4.appspot.com",
  messagingSenderId: "751290463037",
  appId: "1:751290463037:web:02ac104b005052b8510b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
