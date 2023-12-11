 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




 const firebaseConfig = {
    apiKey: "AIzaSyChgIsaMi0e30sCEFmhMCFWJJog5zppRY0",
    authDomain: "react-9-auth-23.firebaseapp.com",
    projectId: "react-9-auth-23",
    storageBucket: "react-9-auth-23.appspot.com",
    messagingSenderId: "186397142416",
    appId: "1:186397142416:web:d9db71e7e9d7f3b2449715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app) 

