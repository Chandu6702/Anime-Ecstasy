import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleLoginClick = () => navigate('/login');
  const handleProfileClick = () => navigate('/profile');

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== "") {
      navigate(`/?search=${encodeURIComponent(inputValue.trim())}`);
      setShowSearch(false);
      setInputValue("");
    }
  };

  return (
    <>
      <nav className="bg-gray-800 w-full fixed top-0 left-0 z-50 h-[70px] flex items-center px-6">
        
        {/* Left: Logo */}
        <div className="w-[220px] overflow-hidden">
          <div
            className={`text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 ease-in-out`}
          >
            {showSearch ? "AE" : "Anime Ecstasy"}
          </div>
        </div>

        {/* Center: Nav Links (hidden on mobile) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <NavLink to="/" className="text-xl font-bold text-white hover:text-purple-500">
            Home
          </NavLink>
          <NavLink to="/about" className="text-xl font-bold text-white hover:text-blue-500">
            About Us
          </NavLink>
          <NavLink to="/watchlist" className="text-xl font-bold text-white hover:text-pink-300">
            Watch-list
          </NavLink>
        </div>

        {/* Right: Search + Auth */}
        <div className="ml-auto flex items-center space-x-4">
          
          {/* Search */}
          <div className="relative flex items-center">
            <div
              className={`flex items-center bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                showSearch ? "w-[220px] px-2" : "w-0 px-0"
              }`}
            >
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="px-2 py-1 text-black rounded-md focus:outline-none w-full"
                  autoFocus
                />
              )}
              {showSearch && (
                <FiX
                  className="text-black text-xl ml-2 cursor-pointer"
                  onClick={toggleSearch}
                  title="Close search"
                />
              )}
            </div>

            {!showSearch && (
              <FiSearch
                className="text-white text-2xl cursor-pointer ml-2"
                onClick={toggleSearch}
                title="Open search"
              />
            )}
          </div>

          {/* Auth */}
          {user ? (
            <button
              onClick={handleProfileClick}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
            >
              Profile
            </button>
          ) : (
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      <div className="flex flex-row justify-around bg-gray-800 text-white pb-2 lg:hidden mt-[70px] px-2">
        <NavLink to="/" className="text-lg font-semibold hover:text-purple-400">
          Home
        </NavLink>
        <NavLink to="/about" className="text-lg font-semibold hover:text-blue-400">
          About Us
        </NavLink>
        <NavLink to="/watchlist" className="text-lg font-semibold hover:text-pink-300">
          Watch-list
        </NavLink>
      </div>
    </>
  );
};
