import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <h2>This is Blogs</h2>
            <div className=' mt-4'>
                <Link to="/about" className='bg-red-900 text-white font-bold p-3 rounded'>Learn More About Us</Link>
            </div>
        </div>
    );
};

export default Blogs;