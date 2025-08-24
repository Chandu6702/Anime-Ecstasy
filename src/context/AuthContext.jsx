import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile as updateFirebaseProfile, // Renamed to avoid name conflicts
} from 'firebase/auth';
import { auth, provider } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google sign-in error:", err);
    }
  };

  const signUpWithEmail = async (email, password, fullName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Email sign-up error:", err.message);
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Email sign-in error:", err.message);
    }
  };

  const logOut = () => signOut(auth);

  // New function to update the user's display name
  const updateUserName = async (newName) => {
    if (auth.currentUser) {
      try {
        await updateFirebaseProfile(auth.currentUser, {
          displayName: newName,
        });
        // Manually trigger a state update to reflect the new name immediately
        setUser({ ...auth.currentUser });
      } catch (error) {
        console.error("Error updating display name:", error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signInWithEmail, signUpWithEmail, logOut, updateUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
