import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-400 drop-shadow">User Profile</h1>
        {user ? (
          <>
            <p className="text-xl mb-6">
              Welcome, <span className="font-semibold text-blue-300">{user.displayName || user.email}</span>
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 text-lg rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-red-400 text-lg">No user is currently logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
