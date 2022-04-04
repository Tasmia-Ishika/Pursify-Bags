import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hook/useReviews';
import ReviewsData from './ReviewsData';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-5xl   mr-8 mt-5 text-red-900 font-bold'>Customer's Feedback</h1>
            <div className='mt-10 grid grid-cols-3 justify-items-center'>
                {
                    reviews.map(review => <ReviewsData
                        key={review.id}
                        review={review}
                    ></ReviewsData>)
                }
            </div>
            <div className=' mt-4'>
                <Link to="/dashboard" className='bg-red-900 text-white font-bold p-3 rounded'>Check Dashboard</Link>
            </div>
        </div>
    );
};

export default Reviews;