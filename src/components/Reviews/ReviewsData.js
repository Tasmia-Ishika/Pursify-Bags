import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewsData = (props) => {
    const { img, name, about, ratings } = props.review;
    return (
        <div className=' max-w-sm rounded overflow-hidden border p-8 border-l-4 m-7 shadow-2xl border-2 border-grey-900'>
            <img className='h-50 object-scale-down w-50 bg-cover bg-center rounded-xl border-l-4 border-b-4 border-red-900' src={img} alt="" />

            <h1 className='mt-5 mb-3 p-3 text-xl font-bold text-red-800'>{name}</h1>
            <p><Rating
                initialRating={ratings}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating></p>
            <div>
                <p className='font-bold'>{about}</p>
            </div>
        </div>
    );
};

export default ReviewsData;