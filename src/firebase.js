// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL9hvRrK3l1lwvxmj_lo2TOjl4RUftK-g",
  authDomain: "final-hackathon-2e2e9.firebaseapp.com",
  projectId: "final-hackathon-2e2e9",
  storageBucket: "final-hackathon-2e2e9.appspot.com",
  messagingSenderId: "254761806397",
  appId: "1:254761806397:web:bd906d5ce9f16585c31854",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
