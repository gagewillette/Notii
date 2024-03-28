import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";

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
      localStorage.setItem("UUID", user.uid);



      setTimeout(() => {
        nav("/notes")
      }, 1000);



    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  };

  return (
    <button onClick={signInWithGoogle} id="google-sign-in">
      Sign In With Google
    </button>
  );
}