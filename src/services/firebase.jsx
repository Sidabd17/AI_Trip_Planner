// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBOso9oEEcR6Oaq7U8eOkakiTr_tJ9668Q",
  authDomain: "trip-planner-18705.firebaseapp.com",
  projectId: "trip-planner-18705",
  storageBucket: "trip-planner-18705.firebasestorage.app",
  messagingSenderId: "968203464024",
  appId: "1:968203464024:web:959dfdccb5ea068e07492d",
  measurementId: "G-WGVBDB10C2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
