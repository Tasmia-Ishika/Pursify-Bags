import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl text-red-900 mt-5'>About Pursify</h1>
                <p className='mt-5 p-5 text-xl'>Pursify is well known for ladies handbags and the  luggages. Pursify use of satin and leather fabric produced bags that were comfortable and affordable to use.Pursify revolutionized fashion both high fashion (haute couture) and everyday fashion by replacing structured-silhouettes, based upon the corset and the bodice, with Bags that were functional and at the same time flattering to the woman's comfort zone.
                    In the 1990s, the simple-line designs of Pursify couture made popular the handbag fashions that were the opposite of the hourglass figure achieved by the fashions of the late 19th century the Belle Époque of France and the British Edwardian era. Pursify used colors traditionally associated with feminity in Europe, such as grey and navy blue, to denote feminine boldness of character.The purse of the House of Pursify featured quilted fabric and leather trimmings; the quilted construction reinforces the fabric, the design, and the finish, producing a garment that maintains its form and function while being worn. An example of such haute couture techniques is the woolen bags a knee-length skirt and a cardigan-style jacket, trimmed and decorated with black embroidery and gold-coloured buttons all over the purse. The complementary accessories were two-tone pump shoes and jewelery, usually a necklace of pearls, and a leather Pursify handbag.</p>
            </div>
            <div className='home'>
                <div className='image-home' >
                    <div>
                        <img src="https://img.freepik.com/free-photo/fashion-female-hand-stylish-trendy-handbag-clutch_155003-10341.jpg?t=st=1649140950~exp=1649141550~hmac=b5970d0b5ff45ee8d781768ee262db2790e86c0ca115aff00745783ab6007411&w=900" alt="" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/beautiful-shot-black-purse-white-table-with-pink_181624-22681.jpg?t=st=1649141524~exp=1649142124~hmac=5a23662b84939bf6cdba0826f5b92e65307880404324eab6c6c83bb5518f3eb4&w=1060" alt="" />
                    </div>
                </div>

            </div>


            <div className=' mt-12'>
                <Link to="/" className='bg-red-900 text-white font-bold p-3 rounded'>Return to Home</Link>
            </div>
        </div>
    );
};

export default About;