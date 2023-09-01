// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "juegos-2bb01.firebaseapp.com",
  projectId: "juegos-2bb01",
  storageBucket: "juegos-2bb01.appspot.com",
  messagingSenderId: "638680986543",
  appId: "1:638680986543:web:9ba91b0805e8e2d388b55a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exportamos la base de datos
export const db = getFirestore(app)
