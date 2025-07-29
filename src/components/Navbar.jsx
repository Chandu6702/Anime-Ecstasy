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
        <nav>
        <div className='flex flex-row w-full bg-black'>
            <nav className='flex space-x-8 w-full items-center p-4 bg-black mx-4 justify-center'>
            {/* <img src='/logo.svg' alt="logo" className='w-[50px]' /> */}
            <div className="text-3xl fixed left-3 top-3 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
  Anime Ecstasy
</div>

            <NavLink to={""} className='text-xl font-bold text-white hover:text-purple-500'>Home</NavLink>
            <NavLink to={""} className='text-xl font-bold text-white hover:text-cyan-400'>Categories</NavLink>
            
            <NavLink to={""} className='text-xl font-bold text-white hover:text-blue-500'>Trending</NavLink>
            <NavLink to={"/watchlist"} className='text-xl font-bold text-white hover:text-pink-300'>Watch-list</NavLink>
          
        </nav>

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

          <div className=''>
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
            className='bg-blue-600 text-white px-5 py-2  mr-10 rounded hover:bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition'
          >
            Login
          </button>
        )}
          </div>
        {/* Auth section */}
        
      </div>
      </div>
    </nav>

  );
};