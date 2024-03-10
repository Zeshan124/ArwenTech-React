import React from 'react';
import network1 from '../Assets/network1.jpg';
import network2 from '../Assets/network2.jpg';
import network3 from '../Assets/network3.jpg';
import backgroundImage from '../Assets/bg.jpg';

const Resources = () => {
    
      return (
        <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="py-12 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-lg ml-4">Explore our curated list of helpful resources.</p>
        </div>
      
    
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={network3} className="w-full h-40 object-cover" alt="Resource 1" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Resource Title 1</h2>
                <p className="text-gray-700">Description of the resource goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="/" className="mt-2 block text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
    
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={network2} alt="Resource 2" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Resource Title 2</h2>
                <p className="text-gray-700">Description of the resource goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="/" className="mt-2 block text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
    
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={network1} alt="Resource 3" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Resource Title 3</h2>
                <p className="text-gray-700">Description of the resource goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="/" className="mt-2 block text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
    
           
            
    
            
          </div>
        </div>
         );
        }

export default Resources;
