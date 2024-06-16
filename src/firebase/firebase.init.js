// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3cegYCMYooNORIAl-VKxvuOkdKV0EJgA",
  authDomain: "majestic-villas.firebaseapp.com",
  projectId: "majestic-villas",
  storageBucket: "majestic-villas.appspot.com",
  messagingSenderId: "848513921960",
  appId: "1:848513921960:web:5b144f92400140fef9a39d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);