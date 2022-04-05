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
            <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?t=st=1649143866~exp=1649144466~hmac=bd2c80c9e22fe28eb959771b6ad8e8ed1316a386c7e3f9909c3372846490e0c2&w=900" alt="" />
            <div className='mt-12'>
                <Link to="/" className='bg-red-900 text-white font-bold p-3 rounded'>Return to Home</Link>
            </div>
        </div>
    );
};

export default Error;