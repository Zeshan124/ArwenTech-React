import React from 'react';
import datacenter from '../Assets/datacenter.JPG';

const Analytics = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-900'>
        <div className='max-w-[1240px] mx-auto p-4 md:grid md:grid-cols-2'>
        <img className='w-full md:w-[500px] mx-auto my-4 border-solid border-2 border-blue-100 rounded-[20px]' src={datacenter} alt="/" />



        <div className='flex flex-col justify-center'>
            <p className='text-[#f8d3e4] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-gray-300 text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut odit hic labore incidunt, dolore eum ad numquam cupiditate ex corrupti, perferendis libero quidem illum nisi nesciunt, suscipit aliquam et totam.</p>

            <button className='bg-gradient-to-r from-purple-600 to-purple-900 text-white font-bold py-3 px-2 rounded-full w-40 pt-2 mt-4'>Get Started</button> 
            </div>
        </div>

    </div>
  );
};

export default Analytics;