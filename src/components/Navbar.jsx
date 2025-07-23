import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-4 bg-black dark:bg-gray-800 transition-colors duration-200'>
            <div className='flex space-x-8 items-center'>
                <img src='/logo.svg' alt="logo" className='w-[50px]' />
                <NavLink to={""} className='text-3xl font-bold text-blue-500 hover:text-blue-400 transition-colors'>Anime</NavLink>
                <NavLink to={"/watchlist"} className='text-3xl font-bold text-blue-500 hover:text-blue-400 transition-colors'>Watch-list</NavLink>
            </div>
            <ThemeToggle />
        </nav>
    )
}
