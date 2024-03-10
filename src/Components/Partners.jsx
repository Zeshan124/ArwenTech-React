import React from 'react';
import partner1 from '../Assets/partner1.png';
import partner2 from '../Assets/partner2.png';
import partner3 from '../Assets/partner3.png';
import partner4 from '../Assets/partner4.png';
import partner5 from '../Assets/partner5.png';
import partner6 from '../Assets/partner6.png';
import partner7 from '../Assets/partner7.png';
import partner8 from '../Assets/partner8.png';
import partner9 from '../Assets/partner9.png';
import partner10 from '../Assets/partner10.png';
import partner11 from '../Assets/partner11.png';
import partner12 from '../Assets/partner12.png';

const Analytics = () => {
  return (
    <section className="bg-gradient-to-r from-gray-400 to-blue-100 py-12">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">ProudPartners</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Partner 1 */}
        <div className="flex items-center justify-center">
          <img src={partner1} alt="Partner 1" className="w-32 h-32 object-contain" />
        </div>
        
        {/* Partner 2 */}
        <div className="flex items-center justify-center">
          <img src={partner2} alt="Partner 2" className="w-32 h-32 object-contain" />
        </div>
        
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner3} alt="Partner 3" className="w-32 h-32 object-contain" />
        </div>

        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner4} alt="Partner 4" className="w-32 h-32 object-contain" />
        </div>

        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner5} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>

        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner6} alt="Partner 6" className="w-32 h-32 object-contain" />
        </div>
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner7} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner8} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner9} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner10} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner11} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>
        {/* Partner 3 */}
        <div className="flex items-center justify-center">
          <img src={partner12} alt="Partner 5" className="w-32 h-32 object-contain" />
        </div>
       
        </div>

        {/* Add more partners as needed */}
        

        
      </div>
      
      
    
  </section>

  
);
};

export default Analytics;