import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/my-profile">My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 p-0 flex justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden px-0 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 py-2 gap-2 shadow-lg">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg md:text-2xl px-0 text-primary font-bold"><img width="50" height="50" src="https://i.ibb.co.com/N2Tn9j9M/subscription.png" alt="subscription" className='hidden md:inline' />Super<p className='-ml-1 text-secondary '>SUB</p></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
                <div className="avatar avatar-online">
                    <div className="w-8 md:w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <Link to="" className='btn btn-primary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;