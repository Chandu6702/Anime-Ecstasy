import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';

const Signup = () => {


   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { signUpWithEmail, signInWithGoogle } = useAuth();

    const navigateToLogin = () => {
    navigate("/login")
    console.log('Navigate to login page');
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

const { fullName, email, password, confirmPassword } = form;
 
  if (!fullName || !email || !password || !confirmPassword) {
    setError("All fields are required.");
    return;
  }

  //  Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  //  Password length
  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  // Confirm password match
  if (form.password !== form.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }
    try {
      await signUpWithEmail(form.email, form.password, form.fullName);
      navigate('/'); 
    } catch (err) {
      console.error("Signup error:", err.message);
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      navigate("/profile");
    } catch (err) {
      console.error("Google sign-up error:", err.message);
      setError(err.message);
    }
  };

  



   return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden px-4 py-6">
      {/* Animated background elements - responsive sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-8 sm:top-40 sm:right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute bottom-20 left-8 sm:bottom-32 sm:left-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-12 right-4 sm:bottom-20 sm:right-10 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        
      
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-3 h-3 lg:w-4 lg:h-4 border border-pink-300 rounded-full animate-spin opacity-30"></div>
        <div className="hidden sm:block absolute top-3/4 right-1/4 w-2 h-2 lg:w-3 lg:h-3 border border-blue-300 rounded-full animate-bounce opacity-40"></div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center border border-white/20 relative z-10 mx-auto mt-10">
       
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Anime Ecstasy
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
            Create Account
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            Sign up to join Anime Ecstasy
          </p>
        </div>

       
        {error && (
          <div className="mb-4 text-red-500 text-xs sm:text-sm text-center bg-red-50 py-2 px-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}

       
        <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
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

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base active:scale-[0.98]"
          >
            Create Account
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
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white border-2 border-gray-300 py-2.5 sm:py-3 px-4 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Sign up with Google</span>
        </button>

      
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Already have an account?
            <button
              type="button"
              onClick={navigateToLogin}
              className="ml-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>

      
        <p className="text-xs text-gray-500 mt-4 sm:mt-6 px-2">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

   
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none"></div>
    </div>
  );
};

export default Signup;
