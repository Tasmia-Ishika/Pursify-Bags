import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       
        <div className='border-b-4'>
             <h2 className='bg-red-900 text-center text-white font-bold h-20 pt-4 pb-4 text-5xl'>
                Pursify
            </h2>
            <nav className='header'>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;