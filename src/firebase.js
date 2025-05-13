// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkZ_loFMgMa2WgTIS7uakIUcywo2HI2y8",
    authDomain: "imagegenerator-6c6b2.firebaseapp.com",
    projectId: "imagegenerator-6c6b2",
    storageBucket: "imagegenerator-6c6b2.firebasestorage.app",
    messagingSenderId: "869807492536",
    appId: "1:869807492536:web:8960142b2781730082d34d",
    measurementId: "G-0HFE0PY301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
