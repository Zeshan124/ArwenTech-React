// Testimonials.js

import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Finance',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisi ut turpis consequat pharetra.',
  },
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Finance',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisi ut turpis consequat pharetra.',
  },
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Finance',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisi ut turpis consequat pharetra.',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-md shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="text-sm text-gray-800">
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
