import { NavLink } from 'react-router-dom';

export const Navbar = () => {
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
            </div>
            <div className='flex space-x-6'>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/watchlist" className={navLinkClass}>Watchlist</NavLink>
            </div>
        </nav>
    );
};
