import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Login = () => {


  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
   const handleSubmit = () => {
    // Your form submission logic for future Enhancements.
    console.log('Form submitted:', formData);
  };
  


  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail } = useAuth();

  // this will navigate the user to the signup page from the login page
  const navigateToSignUp = () => {
    // Navigate to signup component
     navigate('/signup');
    console.log('Navigate to signup page');
  };

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden px-4 py-6">
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-8 sm:top-40 sm:right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute bottom-20 left-8 sm:bottom-32 sm:left-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-12 right-4 sm:bottom-20 sm:right-10 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        
        
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-3 h-3 lg:w-4 lg:h-4 border border-pink-300 rounded-full animate-spin opacity-30"></div>
        <div className="hidden sm:block absolute top-3/4 right-1/4 w-2 h-2 lg:w-3 lg:h-3 border border-blue-300 rounded-full animate-bounce opacity-40"></div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center border border-white/20 relative z-10 mx-auto">
      
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Anime Ecstasy
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
            Welcome Back
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            Login to continue your anime journey
          </p>
        </div>

     
        <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-xs sm:text-sm text-pink-500 hover:text-pink-600 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base active:scale-[0.98]"
          >
            Sign In
          </button>
        </div>

     
        <div className="relative mb-4 sm:mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

       
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white border-2 border-gray-300 py-2.5 sm:py-3 px-4 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Continue with Google</span>
        </button>

      
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Don't have an account?
            <button
              type="button"
              onClick={navigateToSignUp}
              className="ml-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors"
            >
              Sign Up
            </button>
          </p>
        </div>

     
        <p className="text-xs text-gray-500 mt-4 sm:mt-6 px-2">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

    
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none"></div>
    </div>
  );
  

};

export default Login;
