import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hook/useReviews';

import ReviewsData from '../Reviews/ReviewsData';
import './Home.css'
const Home = () => {
    const [reviews] = useReviews();
    return (
        <div className='home mt-5'>
             <h1 className='text-5xl mr-8 text-red-900 font-bold'>Every Bag says a Story of It's Own!</h1>
            <div className='image-home mt-8' >
                <div>
                    <img src="https://img.freepik.com/free-photo/flirtatious-woman-beret-blouse-trousers-holding-red-bag-pink-background_197531-17577.jpg?t=st=1649068888~exp=1649069488~hmac=eb993330b801cc448e512adebb75e84175fdfc65dd064c40425331c47f81ae37&w=900" alt="" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/trendy-woman-glasses-black-jacket-with-handbag-posing-outside-girl-with-short-hair-red-lips-looking-into-camera-street_197531-27993.jpg?w=900" alt="" />
                </div>
            </div>
            <div>
               
                <h1 className='text-4xl mr-8 mt-8 text-red-900 font-bold'>Our Summer Edition Dropping Alert</h1>
                <p className='m-5 p-5'>Our Summer Edition  has launched.As per our promise we are back with super comfy and regular usable handbag. Mostly are hand customed from brazil and designs are inspired from West. We are hoping your response since we have products in stock. Grab before stocks out.</p>
            </div>
            <button className='bg-red-900  text-white font-bold p-3 rounded-full'>Watch Live</button>

            <div className='mt-10'>
                <h1 className='text-4xl text-red-900 font-bold border-l-4'>What our customers says</h1>
                <div className='grid grid-cols-3 mt-5'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewsData
                            key={review.id}
                            review={review}
                        ></ReviewsData>)
                    }
                </div>
                <div className=' mt-4'> 
                    <Link to="/reviews" className='bg-red-900 text-white font-bold p-3 rounded'>See more reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;