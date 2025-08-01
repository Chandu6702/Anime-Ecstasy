import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({ bio: '', favoriteGenres: '' });
  const [watchlist, setWatchlist] = useState([]);
  const [history, setHistory] = useState([]); // New state for watch history
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setWatchlist([]);
      setHistory([]);
      setProfileData({ bio: '', favoriteGenres: '' });
      setLoading(false);
      return;
    }

    setLoading(true);
    const userDocRef = doc(db, 'users', user.uid);

    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData({
          bio: data.bio || 'This is a dummy bio. Edit to add your own!',
          favoriteGenres: data.favoriteGenres || 'Shonen, Seinen, Slice of Life',
        });
        setWatchlist(data.watchlist || []);
        setHistory(data.history || []); // Load history
      } else {
        setDoc(userDocRef, {
          bio: 'This is a dummy bio. Edit to add your own!',
          favoriteGenres: 'Shonen, Seinen, Slice of Life',
          watchlist: [],
          history: [], // Initialize history
        }).catch(error => console.error("Error creating user document:", error));
      }
      setLoading(false);
    }, (error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const updateProfile = async (newBio, newFavoriteGenres) => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userDocRef, {
        bio: newBio,
        favoriteGenres: newFavoriteGenres,
      });
    } catch (error) {
        console.error("Error updating profile:", error);
    }
  };

  const addToWatchlist = async (animeObj) => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userDocRef, { watchlist: arrayUnion(animeObj) });
    } catch(error) {
        console.error("Error adding to watchlist:", error);
    }
  };

  const removeFromWatchlist = async (animeObj) => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
     try {
      await updateDoc(userDocRef, { watchlist: arrayRemove(animeObj) });
    } catch(error) {
        console.error("Error removing from watchlist:", error);
    }
  };

  // New function to add to history
  const addToHistory = async (animeObj) => {
    if (!user) return;
    // Avoid adding duplicates
    if (history.some(item => item.mal_id === animeObj.mal_id)) return;
    
    const userDocRef = doc(db, 'users', user.uid);
    try {
        await updateDoc(userDocRef, { history: arrayUnion(animeObj) });
    } catch (error) {
        console.error("Error adding to history:", error);
    }
  };

  const value = {
    profileData,
    watchlist,
    history,
    loading,
    updateProfile,
    addToWatchlist,
    removeFromWatchlist,
    addToHistory, // Export new function
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};
