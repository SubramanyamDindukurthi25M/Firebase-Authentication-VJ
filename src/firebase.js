import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF4EquS1G7qlbEa2072IY1g-oRir6-fEE",
    authDomain: "fir-authentication-vj.firebaseapp.com",
    projectId: "fir-authentication-vj",
    storageBucket: "fir-authentication-vj.appspot.com",
    messagingSenderId: "384487492908",
    appId: "1:384487492908:web:47f0d1315865483508f089"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);