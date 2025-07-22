import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black/40 dark:bg-gray-900/40 backdrop-blur-md border-b border-white/20">
            {/* Left: Logo */}
            <div className="flex items-center">
                <img
                    src='/logo.svg'
                    alt="logo"
                    className='w-[50px] hover:cursor-pointer'
                    onClick={() => navigate('/')}
                    title="Go to Home"
                />
            </div>
            {/* Center: Links (absolutely centered) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        `text-3xl font-bold ${isActive ? 'text-blue-400 dark:text-blue-300 underline' : 'text-blue-500 dark:text-blue-200'}`
                    }
                >
                    Anime
                </NavLink>
                <NavLink
                    to={"/watchlist"}
                    className={({ isActive }) =>
                        `text-3xl font-bold ${isActive ? 'text-blue-400 dark:text-blue-300 underline' : 'text-blue-500 dark:text-blue-200'}`
                    }
                >
                    Watch-list
                </NavLink>
            </div>
            {/* Right: Dark mode toggle */}
            <button
                onClick={toggleTheme}
                className='ml-auto px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-300 text-white dark:text-gray-200 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200'
                title="Toggle dark mode"
            >
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
            {/* Hamburger menu placeholder for mobile (future) */}
            {/* <div className="md:hidden ml-4"> */}
            {/*   <button>☰</button> */}
            {/* </div> */}
        </nav>
    )
}
