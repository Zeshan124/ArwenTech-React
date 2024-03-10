import React, { useState } from 'react';
import image from '../Assets/image.png';

const ServiceLines = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-pink-400'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 border-solid border-1 border-blue-100 rounded-[20px]' src={image} alt="/" />

        <div className='flex flex-col justify-center'>
          <p className='text-[#e9cdda] font-bold'>SDWAN</p>
          <h1 className='md:text-4xl sm:text-3xl text-gray-300 text-2xl font-bold py-2'>Manage Network Performance</h1>
          <p className='text-gray-200'>SD-WAN or software-defined wide area network solutions are becoming increasingly popular as businesses look for ways to improve the performance, reliability, and security of their networks. </p>

          <div className="max-w-md mx-auto mt-8 p-2 ml-0 text-gray-200">
            
            <div className={isExpanded ? 'block' : 'hidden'}>
              {/* Additional content goes here */}
              <p>Here are some of the benefits of using an SD-WAN solution:</p>
              <br />
              <ul>
                <li>• Increased performance: SD-WAN solutions can improve the performance of your network by optimizing the way that traffic is routed.</li>
                <li>• Improved reliability: SD-WAN solutions can improve the reliability of your network by providing multiple paths for traffic to flow.</li>
                <li>• Increased security: SD-WAN solutions can improve the security of your network by providing a variety of security features.</li>
                
                {/* Add more bullet points as needed */}
              </ul>

              {/* Additional content goes here */}
              <div>
                <p>More content goes here...</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-blue-500 hover:underline focus:outline-none mt-4"
            >
              {isExpanded ? 'Read Less ^' : 'Read More >'}
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ServiceLines;
