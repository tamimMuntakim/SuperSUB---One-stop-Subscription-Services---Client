import React from 'react';
import Sliders from '../components/Sliders';
import { useLoaderData } from 'react-router';
import SubscriptionServices from '../components/SubscriptionServices';

const Home = () => {
    const subscriptionServices = useLoaderData();

    return (
        <>
        <section id='sliders'>
            <Sliders></Sliders>
        </section>
        <section id="subscribed-services">
            <SubscriptionServices subscriptionServices={subscriptionServices}></SubscriptionServices>
        </section>
        </>
    );
};

export default Home;