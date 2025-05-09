import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ErrorPage from './ErrorPage';

const ServiceDetails = () => {
    const subscriptionServices = useLoaderData();
    const { id } = useParams();
    const service = subscriptionServices.find(service => service.id == id);
    if (service) {
        const { name, banner, frequency, price, description, tech_category, features, subscription_benefits, ratings, number_of_reviews } = service;
        
        return (
            <div>
                <div
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '200px'
                    }}
                ></div>
                <div className='p-4'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-bold md:text-xl text-center'>{name}</h3>
                        <p>{tech_category}</p>
                        <div className='flex gap-4 items-center'>
                            <p className='text-sm md:text-base flex items-center gap-2'>Price: {price} $</p>
                            <div className="badge badge-sm md:badge-lg badge-soft badge-success shadow-xs">{frequency}</div>
                        </div>
                        <p>{description}</p>
                        <p className='text-sm md:text-base flex items-center gap-2'>Ratings: {ratings} <span className='text-xs'>({number_of_reviews} reviews)</span></p>
                        <div>
                            <h4 className='font-semibold'>Features:</h4>
                            <ul className='ml-3 md:ml-6'>
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <h4 className='font-semibold mt-4'>Subscription Benefits:</h4>
                            <ul className='ml-3 md:ml-6'>
                                {subscription_benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return <ErrorPage></ErrorPage>;
    }
};

export default ServiceDetails;