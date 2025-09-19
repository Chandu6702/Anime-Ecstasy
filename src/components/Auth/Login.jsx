import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/'); // Navigate to home after successful login
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      // Use a more user-friendly error display than alert() in a real app
      alert('Google login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="bg-white p-8 rounded-xl shadow-xl w-[400px] text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Welcome Back</h2>
        <p className="mb-6 text-gray-600">Login to continue to Anime Ecstasy</p>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
