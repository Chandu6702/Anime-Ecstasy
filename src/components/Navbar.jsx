import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLoginClick = () => navigate('/login');
  const handleProfileClick = () => navigate('/profile');
  const handleSignupClick = () => navigate('/signup');

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

  const openMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-black w-full fixed top-0 left-0 z-50 shadow-md h-[70px] flex items-center px-6">
      {/* Left: Logo */}
      <div className="w-[220px]">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Anime Ecstasy
        </div>
      </div>

      {/* Center: Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <NavLink to="/" className="hidden md:block text-xl font-bold text-white hover:text-purple-500">
          Home
        </NavLink>
        <NavLink to="/about" className="hidden md:block text-xl font-bold text-white hover:text-blue-500">
          About Us
        </NavLink>
        <NavLink to="/watchlist" className="hidden md:block text-xl font-bold text-white hover:text-pink-300">
          Watch-list
        </NavLink>
        <NavLink to="/contactus" className="text-xl font-bold text-white hover:text-blue-500">
          Contact-Us
        </NavLink>
      </div>

      {/* Right: Search + Auth */}
      <div className="ml-auto flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          {showSearch ? (
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="px-3 py-1 text-black rounded-md focus:outline-none w-[200px]"
              />
              <FiX
                className="text-white text-2xl ml-2 cursor-pointer"
                onClick={toggleSearch}
                title="Close search"
              />
            </div>
          ) : (
            <FiSearch
              className="text-white text-2xl cursor-pointer"
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
          <div className="flex gap-2">
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition"
            >
              Login
            </button>
            <button
              onClick={handleSignupClick}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition"
            >
              Signup
            </button>
          </div>
        )}
      </div>

      {/* Mobile hamburger menu */}
      <div className="md:hidden ml-4" onClick={openMenu}>
        <MdMenu className="text-white text-3xl md:hidden cursor-pointer" />
        {showMenu && (
          <div className="absolute top-16 right-4 bg-black border border-gray-700 rounded shadow-lg flex flex-col">
            <NavLink
              to="/"
              className="px-4 py-2 text-white hover:text-purple-500"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-4 py-2 text-white hover:text-blue-500"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/watchlist"
              className="px-4 py-2 text-white hover:text-pink-300"
              onClick={() => setShowMenu(false)}
            >
              Watch-list
            </NavLink>
            <NavLink
              to="/contactus"
              className="px-4 py-2 text-white hover:text-blue-500"
              onClick={() => setShowMenu(false)}
            >
              Contact-Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
