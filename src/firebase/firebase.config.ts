import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVnvZVhotv2Su5zE5g8_28OiQb4V7bgos",
  authDomain: "parkify-155bc.firebaseapp.com",
  projectId: "parkify-155bc",
  storageBucket: "parkify-155bc.appspot.com",
  messagingSenderId: "1020823853550",
  appId: "1:1020823853550:web:4af50b009472e0ee9996ff",
  measurementId: "G-LY4Q0WBX7X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
