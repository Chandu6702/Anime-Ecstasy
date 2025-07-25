import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';

export const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (inputValue.trim() !== "") {
                navigate(`/?search=${encodeURIComponent(inputValue.trim())}`);
                setShowSearch(false);
                setInputValue("");
            }
        }
    };

    const navLinkClass = ({ isActive }) =>
        `text-lg md:text-2xl font-semibold transition duration-300 px-4 py-2 rounded 
        ${isActive ? 'text-orange-400' : 'text-white hover:text-orange-300'}`;

    return (
        <nav className='flex items-center justify-between p-4 bg-black/80 backdrop-blur-md shadow-md'>
            <div className='flex items-center space-x-4'>
                <img src='/logo.svg' alt="logo" className='w-12 h-12' />
                <NavLink to="/" className='text-3xl font-extrabold text-white tracking-wide'>
                    AnimeHub
                </NavLink>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/watchlist" className={navLinkClass}>Watchlist</NavLink>
            </div>

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
        </nav>
    );
};
