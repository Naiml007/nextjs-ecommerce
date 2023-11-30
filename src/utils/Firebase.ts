// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSmgwic0rTHS7Urqoj6EQeFo5VDQfJSTw",
  authDomain: "e-commerce-f3bca.firebaseapp.com",
  projectId: "e-commerce-f3bca",
  storageBucket: "e-commerce-f3bca.appspot.com",
  messagingSenderId: "279733760476",
  appId: "1:279733760476:web:cbd84959817a1fcc9fdf19",
  measurementId: "G-511GEWMVPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
