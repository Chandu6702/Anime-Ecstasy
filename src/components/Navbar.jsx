import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between p-4 bg-black'>
            <div className='flex items-center justify-center gap-2'>

            <img src='/logo.svg' alt="logo" className='w-[50px]' />
            <p className='text-blue-500 mb-[-10px]'>Anime-Site</p>
            </div>
            <div className='flex items-center justify-center gap-2 md:mt-0 mt-4 md:gap-5'>

            <NavLink to={""} className='md:text-2xl text-md font-bold text-blue-500'>Anime</NavLink>
            <NavLink to={"/watchlist"} className='md:text-2xl text-md font-bold text-blue-500'>Watch-list</NavLink>
            </div>
        </nav>
    )
}
