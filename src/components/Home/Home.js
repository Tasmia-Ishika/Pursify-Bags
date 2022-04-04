import React from 'react';
import './Home.css'
const Home = () => {

    return (
        <div className='home'>
            <div className='image-home' >
                <div>
                    <img src="https://img.freepik.com/free-photo/flirtatious-woman-beret-blouse-trousers-holding-red-bag-pink-background_197531-17577.jpg?t=st=1649068888~exp=1649069488~hmac=eb993330b801cc448e512adebb75e84175fdfc65dd064c40425331c47f81ae37&w=900" alt="" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/trendy-woman-glasses-black-jacket-with-handbag-posing-outside-girl-with-short-hair-red-lips-looking-into-camera-street_197531-27993.jpg?w=900" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-4xl mr-8 mt-8 text-red-900 font-bold'>Summer Edition Dropping Alert</h1>
                <p className='m-5 p-5'>Our Summer Edition  has launched.As per our promise we are back with super comfy and regular usable handbag. Mostly are hand customed from brazil and designs are inspired from West. We are hoping your response since we have products in stock. Grab before stock outs.</p>
            </div>
            <button className='bg-red-900  text-white font-bold p-3 rounded-full'> Watch Live</button>

            <div>
                <h1>What our customers says:</h1>
            </div>
        </div>
    );
};

export default Home;