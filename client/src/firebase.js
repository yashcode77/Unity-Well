// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "syrus2.firebaseapp.com",
  projectId: "syrus2",
  storageBucket: "syrus2.appspot.com",
  messagingSenderId: "903720087926",
  appId: "1:903720087926:web:358d961c69d8a42d828a57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
