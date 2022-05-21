import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW3RQ9-Qds27JNqGwRRiK9j63i8MA0O_E",
  authDomain: "test-96f89.firebaseapp.com",
  projectId: "test-96f89",
  storageBucket: "test-96f89.appspot.com",
  messagingSenderId: "994882515625",
  appId: "1:994882515625:web:715104a9ebf734b161afb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
