// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8F7LEpKROj_yE-2ciyg-wh_6ZTOE9O-Q",
  authDomain: "realtor-2-fad5b.firebaseapp.com",
  projectId: "realtor-2-fad5b",
  storageBucket: "realtor-2-fad5b.appspot.com",
  messagingSenderId: "43320313318",
  appId: "1:43320313318:web:305fe52f3c31d6411f8227",
  measurementId: "G-JP7JFZBBEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
