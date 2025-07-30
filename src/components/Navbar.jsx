import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== "") {
      navigate(`/?search=${encodeURIComponent(inputValue.trim())}`);
      setShowSearch(false);
      setInputValue("");
    }
  };

  const handleLoginClick = () => navigate('/login');
  const handleProfileClick = () => navigate('/profile');

  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md border-b border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] z-50'>
      {/* Left: Logo & Links */}
      <div className='flex space-x-10 items-center'>
        <img src='/logo.svg' alt="logo" className='w-[50px] drop-shadow-lg' />
        
        <NavLink 
          to="/" 
          className='text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-400 transition-all duration-300'
        >
          Anime
        </NavLink>

        <NavLink 
          to="/watchlist" 
          className='text-lg text-white hover:text-cyan-400 tracking-wide transition-all duration-200 border-b-2 border-transparent hover:border-cyan-400'
        >
          Watch-list
        </NavLink>
      </div>

      {/* Right: Search + Auth */}
      <div className='flex items-center space-x-4'>
        <div className='relative'>
          {showSearch ? (
            <div className='flex items-center'>
              <input
                type="text"
                placeholder="Search anime..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className='px-4 py-2 w-[220px] bg-black/70 text-white border border-cyan-400/30 rounded-md backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-400 font-mono text-sm shadow-inner'
              />
              <FiX
                className='text-red-400 text-2xl ml-2 cursor-pointer hover:text-white transition-all duration-300'
                onClick={toggleSearch}
                title="Close search"
              />
            </div>
          ) : (
            <FiSearch
              className='text-cyan-300 text-2xl cursor-pointer hover:text-white transition-all duration-300'
              onClick={toggleSearch}
              title="Open search"
            />
          )}
        </div>

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={handleProfileClick}
            className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300 text-sm'
          >
            Profile
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-300 text-sm'
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
