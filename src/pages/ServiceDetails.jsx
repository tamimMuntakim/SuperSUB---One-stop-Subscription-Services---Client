import React, { use, useEffect, useState } from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { TbFaceIdError } from 'react-icons/tb';
import { Link, useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import UserReview from '../components/UserReview';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const subscriptionServices = useLoaderData();
    const { user } = use(AuthContext);
    const { id } = useParams();
    const service = subscriptionServices.find(service => service.id == id);

    const [userReviews, setUserReviews] = useState([]);

    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        const rating = form.rating.value;
        const newReview = {
            userName: user.displayName,
            review,
            rating
        }
        const newUserReviews = [...userReviews, newReview];
        setUserReviews(newUserReviews);
    }

    useEffect(() => {
        toast.success("Successfully Updated Review!", {
            autoClose: 1500,
        });
    }, [userReviews]);


    if (service) {
        const { name, banner, frequency, price, description, tech_category, features, subscription_benefits, ratings, number_of_reviews } = service;

        return (
            <div className='p-1 md:p-2 shadow md:shadow-xl rounded-lg md:rounded-2xl border-slate-300 overflow-hidden'>
                <title>SuperSUB || Service Details</title>
                <div
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '200px'
                    }}
                    className='rounded-xl md:rounded-2xl'
                ></div>
                <div className='p-4'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <h3 className='font-bold md:text-xl text-center'>{name}</h3>
                        <hr className='border border-dashed border-gray-500 w-full' />
                        <p>{tech_category}</p>
                        <hr className='border border-dashed border-gray-500 w-full' />
                        <div className='flex gap-4 items-center'>
                            <p className='text-sm md:text-base flex items-center gap-2'>Price: {price} $</p>
                            <div className="badge badge-sm md:badge-lg badge-soft badge-success shadow-xs">{frequency}</div>
                        </div>
                        <hr className='border border-dashed border-gray-500 w-full' />
                        <p>{description}</p>
                        <hr className='border border-dashed border-gray-500 w-full' />
                        <p className='text-sm md:text-base flex items-center gap-2'>Ratings: {ratings} <span className='text-xs'>({number_of_reviews} reviews)</span></p>
                        <hr className='border border-dashed border-gray-500 w-full' />
                        <div className='flex flex-col md:flex-row gap-4 justify-center items-stretch p-1 md:p-2 shadow md:shadow-xl rounded-lg md:rounded-2xl border-slate-300'>
                            <div className='flex-1 p-1 md:p-2 shadow md:shadow-xl rounded-lg md:rounded-2xl border-slate-300'>
                                <h4 className='font-semibold'>Features:</h4>
                                <ul className='ml-3 md:ml-6'>
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex-1 p-1 md:p-2 shadow md:shadow-xl rounded-lg md:rounded-2xl border-slate-300'>
                                <h4 className='font-semibold'>Subscription Benefits:</h4>
                                <ul className='ml-3 md:ml-6'>
                                    {subscription_benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='border border-dashed border-gray-500 w-full mt-2 md:mt-4' />
                        <form onSubmit={handleReview} className="card-body mt-4 border border-slate-300 rounded-xl md:w-sm md:mx-auto">
                            <h2 className='text-center md:text-lg md:font-semibold'>Submit Review and Rating</h2>
                            <fieldset className="fieldset">
                                <label className="label">Review</label>
                                <input
                                    name="review"
                                    type="text"
                                    className="input"
                                    placeholder="Review"
                                    required
                                />

                                <label className="label">Rating</label>
                                <input
                                    name="rating"
                                    type="number"
                                    className="input"
                                    placeholder="Rate from 1 to 5"
                                    min="1"
                                    max="5"
                                    required
                                />

                                <button type="submit" className="btn btn-neutral mt-4">
                                    Save Review
                                </button>

                            </fieldset>
                        </form>
                        <hr className='border border-dashed border-gray-500 w-full mt-2 md:mt-4' />
                        {
                            userReviews.length > 0 && (
                                <div>
                                    <h2 className='font-bold md:text-xl mb-4 text-center'>User Reviews</h2>
                                    <div className='flex gap-4 flex-wrap items-center justify-center'>
                                        {userReviews.map((userReview, index) => (
                                            <UserReview key={index} userReview={userReview} />
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to="/"><button className="btn rounded-4xl btn-primary font-bold px-4 mt-4 md:px-8 md:mt-8 text-white"><IoArrowBackCircleSharp className='w-[25px] md:w-[30px] h-auto' />Back to Home</button></Link>
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
                    <Link to="/"><button className="btn rounded-4xl btn-primary font-bold md:px-8 px-4 mt-4 md:mt-8 text-white"><IoArrowBackCircleSharp className='w-[25px] md:w-[30px] h-auto' />Back to Home</button></Link>
                </div>
            </div>
        );
    }
};

export default ServiceDetails;