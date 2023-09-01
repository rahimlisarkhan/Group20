// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt6sZU2PaZpWPf5KouSFK9x7MBp8wxniE",
  authDomain: "audibook-1b338.firebaseapp.com",
  databaseURL: "https://audibook-1b338-default-rtdb.firebaseio.com",
  projectId: "audibook-1b338",
  storageBucket: "audibook-1b338.appspot.com",
  messagingSenderId: "504139500556",
  appId: "1:504139500556:web:fde3ba75baf5a62e113229",
  measurementId: "G-1HM3P8X8WC",
};

if (!initializeApp.length) {
  var app = initializeApp(firebaseConfig);
}

export const database = getDatabase(app);

// Initialize Firebase
// const analytics = getAnalytics(app);
