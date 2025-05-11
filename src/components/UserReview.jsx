import React from 'react';

const UserReview = ({userReview}) => {
    const {userName, review, rating} = userReview;
    return (
        <div className='flex flex-col gap-2 bg-base-200 p-2 rounded-xl'>
            <div className='p-2 bg-base-100'>
            <p className='text-primary'>Review: {review}</p>
            <p className='text-primary'>Rating: {rating}</p>
            </div>
            <p className='text-secondary'>By: {userName}</p>
        </div>
    );
};

export default UserReview;