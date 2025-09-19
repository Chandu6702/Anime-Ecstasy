import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmail(email, password);
      navigate('/');
    } catch (err) {
      console.error('Email sign-in error:', err?.message || err);
      setError(err?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      setError('Google login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px] max-w-full">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2 text-black text-center">Welcome Back</h2>
        <p className="mb-6 text-gray-600 text-center">Sign in to continue to Anime Ecstasy</p>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-100 rounded p-2">{error}</div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><Mail size={18} /></span>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><Lock size={18} /></span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 pl-10 pr-11 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

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

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
