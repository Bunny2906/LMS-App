import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyApL6iG93HBH6_jZ-m0A4rWm8oRvjUMias",
    authDomain: "lmsapp-31da4.firebaseapp.com",
    databaseURL: "https://lmsapp-31da4-default-rtdb.firebaseio.com",
    projectId: "lmsapp-31da4",
    storageBucket: "lmsapp-31da4.appspot.com",
    messagingSenderId: "1031463404361",
    appId: "1:1031463404361:web:e23b0390814e1a77c7d098",
    measurementId: "G-3XJ0D1HHX6"
};

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
