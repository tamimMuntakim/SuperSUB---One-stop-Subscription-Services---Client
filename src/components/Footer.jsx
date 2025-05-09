import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-gray-950 text-white rounded p-3 gap-3 md:p-6 md:gap-6">
                <Link to="/" className="text-lg md:text-2xl px-0 text-primary font-bold flex"><img width="50" height="50" src="https://i.ibb.co.com/N2Tn9j9M/subscription.png" alt="subscription" className='' />Super<p className='-ml-1 text-secondary '>SUB</p></Link>
                <nav className="flex flex-col md:flex-row gap-3 md:gap-8">
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/my-profile">My Profile</Link>
                    <Link className="link link-hover" to="my-profile">Terms and Conditions</Link>
                    <Link className="link link-hover" to="/blogs">Privacy Policy</Link>
                </nav>
                <hr className='border border-dashed border-gray-500 w-full' />
                <nav>
                    <div className="grid grid-flow-col gap-4 md:gap-8">
                        <a href="https://www.facebook.com/tamim.muntakim.02" target='_blank'><FaFacebookSquare size={20} /></a>
                        <a href="https://www.linkedin.com/in/tamim-muntakim-51052625a/" target='_blank'><FaLinkedin size={20} /></a>
                        <a href="https://github.com/tamimMuntakim" target='_blank'><FaGithub size={20} /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;