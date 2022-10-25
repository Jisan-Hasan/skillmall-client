// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFb7Rj-fQTLy_qmraXobyDJngbXjPdUVE",
  authDomain: "skill-mall.firebaseapp.com",
  projectId: "skill-mall",
  storageBucket: "skill-mall.appspot.com",
  messagingSenderId: "980743987768",
  appId: "1:980743987768:web:8ed124ac33a927874dfccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;