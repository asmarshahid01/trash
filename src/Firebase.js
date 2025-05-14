import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyU_h0ALvJX1lbl2t7uKOiIhh0y77YZvE",
  authDomain: "laptop-65ae0.firebaseapp.com",
  databaseURL: "https://laptop-65ae0-default-rtdb.firebaseio.com",
  projectId: "laptop-65ae0",
  storageBucket: "laptop-65ae0.firebasestorage.app",
  messagingSenderId: "398953807370",
  appId: "1:398953807370:web:5ee4249c7fe2e70173a9f3",
  measurementId: "G-MR1R3X7KGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const database = getDatabase(app);

export { database };