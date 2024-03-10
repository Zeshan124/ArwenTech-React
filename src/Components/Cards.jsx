import React, { useEffect, useState } from 'react';
import Single from '../Assets/single.png';
import Double from '../Assets/double.png';
import Triple from '../Assets/triple.png';

const Cards = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    customers: 0,
    experience: 0,
  });

  const targetValues = {
    projects: 1500,
    customers: 3500,
    experience: 19,
  };

  const incrementCounters = () => {
    setCounters((prevCounters) => ({
      projects: prevCounters.projects < targetValues.projects ? prevCounters.projects + 10 : targetValues.projects,
      customers: prevCounters.customers < targetValues.customers ? prevCounters.customers + 10 : targetValues.customers,
      experience: prevCounters.experience < targetValues.experience ? prevCounters.experience + 10 : targetValues.experience,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      incrementCounters();
    }, 10);

    return () => clearInterval(interval);
  }, ); 

  return (
    <div id="cards-section" className='w-full py-8 px-4 bg-gray-400'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
      </div>
      
      <div className="flex flex-col items-center bg-gray-200 mt-8 p-4 rounded-lg shadow-lg sm:flex-row sm:justify-around sm:items-center">

        <div className="flex flex-col items-center border border-gray-300 p-4 mb-4 sm:mb-0">
          <img className="w-20 mb-4" src={Single} alt="Project Img" />
          <div>
            <p className="text-2xl font-bold mb-2">Projects Completed:</p>
            <p className="text-xl">{counters.projects}</p>
          </div>
        </div>

        <div className="flex flex-col items-center border border-gray-300 p-4 mb-4 sm:mb-0">
          <img className="w-20 mb-4" src={Double} alt="Project Img" />
          <div>
            <p className="text-2xl font-bold mb-2">Happy Customers:</p>
            <p className="text-xl">{counters.customers}</p>
          </div>
        </div>

        <div className="flex flex-col items-center border border-gray-300 p-4">
          <img className="w-20 mb-4" src={Triple} alt="Project Img" />
          <div>
            <p className="text-2xl font-bold mb-2">Years in experience:</p>
            <p className="text-xl">{counters.experience}</p>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default Cards;
