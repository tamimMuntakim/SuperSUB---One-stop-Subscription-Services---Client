import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 md:container mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 md:container mx-auto my-4 md:my-8 space-y-8 md:space-y-12 min-h-[calc(100vh-310px)] md:min-h-[calc(100vh-325px)]'> 
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;