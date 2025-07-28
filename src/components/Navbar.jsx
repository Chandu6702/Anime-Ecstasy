import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user } = useAuth(); // Get user from context
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleLoginClick = () => navigate('/login');
  const handleProfileClick = () => navigate('/profile');

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

  return (
  <nav className='flex justify-between items-center px-6 py-4 bg-white/20 backdrop-blur-lg shadow-lg text-white rounded-xl border border-white/30 transition-all duration-700 ease-in-out'>

      <div className='flex items-center space-x-8'>
        <img src='/logo.svg' alt="Logo" className='w-[50px] h-auto' />
        <NavLink to="/" className='text-3xl font-bold text-blue-500 hover:underline'>
          Anime
        </NavLink>
        <NavLink to="/watchlist" className='text-3xl font-bold text-blue-500 hover:underline'>
          Watch-list
        </NavLink>
      </div>

      <div className='flex items-center space-x-4'>
        {/* Search section */}
        <div className='relative'>
          {showSearch ? (
            <div className='flex items-center'>
              <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className='px-3 py-1 text-black rounded-md focus:outline-none w-[200px]'
              />
              <FiX
                className='text-white text-2xl ml-2 cursor-pointer'
                onClick={toggleSearch}
                title="Close search"
              />
            </div>
          ) : (
            <FiSearch
              className='text-white text-2xl cursor-pointer'
              onClick={toggleSearch}
              title="Open search"
            />
          )}
        </div>

        {/* Auth section */}
        {user ? (
          <button
            onClick={handleProfileClick}
            className='bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition'
          >
            Profile
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className='bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition'
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};
