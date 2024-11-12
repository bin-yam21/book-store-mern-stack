/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleprovider = new GoogleAuthProvider();
// create a context object;
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
//  authprovider
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  //   sign up with google account
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleprovider);
  };
  //   sign out tht user
  const logout = () => {
    return signOut(auth);
  };
  //   manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const { email, displayName, photoUrl } = user;
        const userData = {
          email,
          userName: displayName,
          photo: photoUrl,
        };
      }
    });
    return () => unsubscribe(); // Clean up function when component unmounts to prevent memory leaks
  }, []);

  const value = {
    currentUser,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
