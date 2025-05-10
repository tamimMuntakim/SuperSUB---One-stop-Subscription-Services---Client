import React from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { TbFaceIdError } from 'react-icons/tb';
import { Link, useLoaderData, useParams } from 'react-router';

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
    } else {
        return (
            <div className='w-11/12 md:container mx-auto'>
                <div className=" bg-base-200 rounded-2xl w-full md:w-[40%] mx-auto flex flex-col justify-center items-center py-8 px-4 md:px-8 shadow-md shadow-red-100 text-center">
                    <div className='bg-red-500 rounded-xl shadow-md shadow-red-200'><TbFaceIdError className='text-white w-[50px] md:w-[150px] h-auto' /></div>
                    <span className='text-lg md:text-2xl font-bold text-red-500 mt-4 mb-2 md:mt-8 md:mb-4'>404 - page not found</span>
                    <span className='font-bold'>Oops! Something went wrong....</span>
                    <Link to="/"><button className="btn rounded-4xl btn-primary font-bold px-4 mt-4 md:px-8 px-4 mt-4 md:mt-8 text-white"><IoArrowBackCircleSharp className='w-[25px] md:w-[30px] h-auto' />Back to Home</button></Link>
                </div>
            </div>
        );
    }
};

export default ServiceDetails;