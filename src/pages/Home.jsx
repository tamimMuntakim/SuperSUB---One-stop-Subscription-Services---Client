import React from 'react';
import Sliders from '../components/Sliders';
import { useLoaderData } from 'react-router';
import SubscriptionServices from '../components/SubscriptionServices';
import Partners from '../components/Partners';
import ComingSoon from '../components/ComingSoon';

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
        <section id="coming-soon">
            <ComingSoon></ComingSoon>
        </section>
        <section id="partners">
            <Partners></Partners>
        </section>
        </>
    );
};

export default Home;