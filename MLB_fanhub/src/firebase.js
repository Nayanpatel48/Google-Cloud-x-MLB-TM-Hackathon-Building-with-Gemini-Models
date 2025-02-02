import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3qBMKLqvmFW_2lB0IBE_CmN9FXtoV48",
  authDomain: "crud-project-28388.firebaseapp.com",
  projectId: "crud-project-28388",
  storageBucket: "crud-project-28388.firebasestorage.app",
  messagingSenderId: "1082226481100",
  appId: "1:1082226481100:web:d589f753011848280c6f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Get the auth instance

export { auth }; // Export the auth instance
//This line exports the auth constant, making it available for use in other 
// modules (like your React components).

// console.log(auth)