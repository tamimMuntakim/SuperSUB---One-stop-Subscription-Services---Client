import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-[calc(100vh-310px)] md:min-h-[calc(100vh-325px)] flex justify-center items-center text-secondary'>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default Loader;