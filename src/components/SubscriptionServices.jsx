import React from 'react';
import SubscriptionService from './SubscriptionService';

const SubscriptionServices = ({ subscriptionServices }) => {

    return (
        <div>
            <h1 className='mt-7 mb-3 text-2xl md:mt-14 md:mb-6 md:text-4xl font-bold text-primary'>Subscription Services</h1>
            <p className='mb-3 md:mb-6'>Professional-grade subscriptin services tailored for students and researchers</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:px-4 py-2 md:py-6'>
                {subscriptionServices.map((service)=>{
                    return <SubscriptionService key={service.id} service={service}></SubscriptionService>
                })}
            </div>
        </div>
    );
};

export default SubscriptionServices;