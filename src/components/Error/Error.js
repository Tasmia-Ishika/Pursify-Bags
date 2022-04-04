import React from 'react';
import { CgSmileSad } from 'react-icons/cg';
const Error = () => {
    return (
        <div className='flex m-10 justify-center'>
            <div>
                <h2 className='text-5xl text-red-900'>Sorry!!  Search not Found</h2>
            </div>
            <div className='text-5xl text-red-900'>
                <CgSmileSad></CgSmileSad>
            </div>
        </div>
    );
};

export default Error;