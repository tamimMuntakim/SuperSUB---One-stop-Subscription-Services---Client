import React from 'react';
import { Link } from 'react-router';

const SubscriptionService = ({ service }) => {
    const { id, thumbnail, name, tech_category, price, frequency } = service;
    return (
        <div className='flex gap-3 p-2 md:gap-4 md:p-4 border border-slate-300 rounded-2xl shadow-md hover:shadow-lg items-center'>
            <div className='bg-slate-100 rounded-xl p-1 md:p-2 shadow-md grow-0'>
                <img src={thumbnail} alt="" className='h-[60px] w-[60px] md:h-[100px] md:w-[100px] object-contain rounded md:rounded-xl shadow-md' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className="badge badge-sm md:badge-lg badge-soft badge-success shadow-xs">{frequency}</div>
                <h3 className='font-bold md:text-xl'>{name}</h3>
                <p>{tech_category}</p>
                <p className='text-sm md:text-base flex items-center gap-2'>Price: {price} $</p>
                <Link to={`/service-details/${id}`} className='w-full'><button className='btn btn-primary btn-outline rounded-xl btn-sm md:btn-md md:font-bold'>View More</button></Link>
            </div>
        </div>
    );
};

export default SubscriptionService;