import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import "../../styles/signin.scss";

export default function SignIn() {
  //for google auth
  const googleProvider = new GoogleAuthProvider();
  const nav = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      //give local storage UUID
      document.cookie = `uuid=${user.uid}; max-age=86400; path=/`;

      console.log(user.uid + " retrieved from google sign in");

      //create user in firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      nav("/notes");
    } catch (error) {      
      const errorCode = error.code;
    
      const errorMessage = error.message;
    
      const email = error.email;
    
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <div className="sign-in-wrapper">
      <button onClick={signInWithGoogle} id="google-sign-in">
        Sign In With Google
      </button>
    </div>
  );
}
