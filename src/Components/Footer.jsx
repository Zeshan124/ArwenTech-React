import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-800 py-5 px-4'>
            <div className='max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
                <div>
                    <h1 className='text-3xl font-bold text-[#00df9a] mb-4'>Arwen’s Services</h1>
                    <p className='text-gray-400 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eveniet esse veniam odio excepturi nisi, repudiandae debitis voluptates dolores ipsa?</p>
                    <div className='flex space-x-4 mb-4'>
                        <a href="https://www.facebook.com/ArwentechPvtLtd/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare size={30} style={{ color: 'white' }} />
                        </a>
                        <FaInstagram size={30} style={{ color: 'white' }} />
                        <a href="https://twitter.com/Arwentech_com" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare size={30} style={{ color: 'white' }} />
                        </a>
                        <FaGithubSquare size={30} style={{ color: 'white' }} />
                        <FaDribbbleSquare size={30} style={{ color: 'white' }} />
                    </div>
                </div>

                <div className='text-gray-300'>
                    <h6 className='font-medium mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Solutions</h6>
                    <ul>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Analytics</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Marketing</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Commerce</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Insights</li>
                    </ul>
                </div>

                <div className='text-gray-300'>
                    <h6 className='font-medium mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Support</h6>
                    <ul>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Pricing</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Documentations</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Guides</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>API Status</li>
                    </ul>
                </div>

                <div className='text-gray-300'>
                    <h6 className='font-medium mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Company</h6>
                    <ul>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>About</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Blogs</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Jobs</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Press</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Careers</li>
                    </ul>
                </div>

                <div className='text-gray-300'>
                    <h6 className='font-medium mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Legal</h6>
                    <ul>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Claim</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Policy</li>
                        <li className='text-sm text-gray-400 mb-2 md:pl-2 md:pr-2 lg:pl-8 lg:pr-4'>Terms</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-600 mt-8">
                <p className=''>All rights reserved </p>
                <p>© 2023 Arwen Tech (Pvt) Ltd.</p>
            </div>
        </div>
    );
};

export default Footer;
