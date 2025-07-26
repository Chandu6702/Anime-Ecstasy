import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 flex space-x-8 items-center p-4 bg-transparent/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20'>
            <img src='/logo.svg' alt="logo" className='w-[50px]' />
            <NavLink to={""} className='text-3xl font-bold text-blue-500'>Anime</NavLink>
            <NavLink to={"/watchlist"} className='text-3xl font-bold text-blue-500'>Watch-list</NavLink>
        </nav>
    )
}
