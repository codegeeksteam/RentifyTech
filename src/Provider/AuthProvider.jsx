/* eslint-disable react-refresh/only-export-components */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import { GoogleAuthProvider } from "firebase/auth";
  import auth from "../Firebase/firebase";
  import useAxiosPublic from "../Hooks/useAxiosPublic";
  
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const singInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signInGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const signOutUser = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const updateMyProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };

    // 
    const forgetPassword = (auth, email) => {
      return sendPasswordResetEmail(auth, email);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
        console.log("Currently logged user", currentUser);
        setUser(currentUser);
        if (currentUser) {
          const userInfo = { email: currentUser?.email };
        const res = await  axiosPublic.post("/jwt", userInfo)
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
        }
        else {
          localStorage.removeItem("access-token");
          setLoading(false);
        }
      });
      return () => {
        unSubscribe();
      };
    }, [axiosPublic]);
  
    const authInfo = {
      user,
      loading,
      createUser,
      setUser,
      singInUser,
      signInGoogle,
      signOutUser,
      updateMyProfile,
      forgetPassword
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  
