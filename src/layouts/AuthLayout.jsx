import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 md:container mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 md:container mx-auto'> 
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;