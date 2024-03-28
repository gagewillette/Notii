import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCi6dU2Mz_l5Ft4aFKZ_EjjmXIg2T_I6G0",
  authDomain: "notii-fad3c.firebaseapp.com",
  projectId: "notii-fad3c",
  storageBucket: "notii-fad3c.appspot.com",
  messagingSenderId: "193770800078",
  appId: "1:193770800078:web:457f3f33085083da2c619f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {app, db, auth};
