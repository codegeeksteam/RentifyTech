// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD05_3O3i3yat8IbY94WPbSHzOcQ_1Dr6M",
  authDomain: "rentechify.firebaseapp.com",
  projectId: "rentechify",
  storageBucket: "rentechify.firebasestorage.app",
  messagingSenderId: "964944758106",
  appId: "1:964944758106:web:b5c4c3d2808f1b88171f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;