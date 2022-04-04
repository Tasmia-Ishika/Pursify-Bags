import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>this is about</h1>
            <div className=' mt-4'>
                <Link to="/" className='bg-red-900 text-white font-bold p-3 rounded'>Return to Home</Link>
            </div>
        </div>
    );
};

export default About;