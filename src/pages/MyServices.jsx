import React from 'react';
import { useLoaderData } from 'react-router';
import MyServiceTool from '../components/MyServiceTool';

const MyServices = () => {
    const myServices = useLoaderData();
    return (
        <div>
            <h1 className='mt-3 mb-2 text-2xl md:mt-8 md:mb-4 md:text-4xl font-bold text-primary text-center'>My Subscription Services</h1>
            <p className='mb-2 md:mb-4 text-center'>Manage your engineering tools and academic resources in one place</p>
            <div className='space-y-8'>
                {myServices.map((serviceTool, index) => {
                    return (
                        <MyServiceTool key={index} id={index} serviceTool={serviceTool}></MyServiceTool>
                    )
                })}
            </div>
        </div>
    );
};

export default MyServices;