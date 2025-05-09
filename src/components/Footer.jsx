import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-gray-950 text-white rounded p-3 gap-3 md:p-6 md:gap-6">
                <Link to="/" className="text-lg md:text-2xl px-0 text-primary font-bold flex"><img src="https://i.ibb.co.com/N2Tn9j9M/subscription.png" alt="subscription" className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]' />Super<p className='-ml-1 text-secondary '>SUB</p></Link>
                <nav className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/my-profile">My Profile</Link>
                    <Link className="link link-hover" to="my-profile">Terms and Conditions</Link>
                    <Link className="link link-hover" to="/blogs">Privacy Policy</Link>
                </nav>
                <hr className='border border-dashed border-gray-500 w-full' />
                <nav>
                    <div className="grid grid-flow-col gap-4 md:gap-8">
                        <a href="https://www.facebook.com/tamim.muntakim.02" target='_blank'><FaFacebookSquare className='w-4 h-4 md:w-6 md:h-6' /></a>
                        <a href="https://www.linkedin.com/in/tamim-muntakim-51052625a/" target='_blank'><FaLinkedin className='w-4 h-4 md:w-6 md:h-6' /></a>
                        <a href="https://github.com/tamimMuntakim" target='_blank'><FaGithub className='w-4 h-4 md:w-6 md:h-6' /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;