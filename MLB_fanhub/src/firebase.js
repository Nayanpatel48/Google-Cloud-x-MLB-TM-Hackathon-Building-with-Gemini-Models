import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  //add firebase project configrations
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Get the auth instance

export { auth }; // Export the auth instance
//This line exports the auth constant, making it available for use in other 
// modules (like your React components).

// console.log(auth)