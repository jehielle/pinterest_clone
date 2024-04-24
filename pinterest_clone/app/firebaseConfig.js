// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFw5jN1-uexni59vbQs9ZR0dVC25wtEsk",
  authDomain: "pinterestclone-4b549.firebaseapp.com",
  projectId: "pinterestclone-4b549",
  storageBucket: "pinterestclone-4b549.appspot.com",
  messagingSenderId: "770751976834",
  appId: "1:770751976834:web:9735e6cf1a671ff160ab9b",
  measurementId: "G-K1MBEGWKTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;