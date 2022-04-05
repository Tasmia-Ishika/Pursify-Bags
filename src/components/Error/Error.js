import React from 'react';
import { CgSmileSad } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <div  className='flex m-10 justify-center'>
                <div>
                    <h2 className='text-5xl text-red-900'>Sorry!!  Search not Found</h2>
                </div>
                <div className='text-5xl text-red-900'>
                    <CgSmileSad></CgSmileSad>
                </div>
            </div>
            <div className='mt-6'>
                <Link to="/" className='bg-red-900 text-white font-bold p-3 rounded'>Return to Home</Link>
            </div>
        </div>
    );
};

export default Error;