// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5pG3h07E26aYr08kin1zCIybLkaxFiIM",
  authDomain: "prepwise-f5d91.firebaseapp.com",
  projectId: "prepwise-f5d91",
  storageBucket: "prepwise-f5d91.firebasestorage.app",
  messagingSenderId: "486393897142",
  appId: "1:486393897142:web:cf8c8116265e9c11b0c617",
  measurementId: "G-FJ2KV5BNXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);