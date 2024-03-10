import React from 'react';

const Newsroom = () => {
  const newsData = [
    { id: 1, title: 'Market Update', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Stock Analysis', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Economic Trends', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 4, title: 'Cryptocurrency News', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'Investment Tips', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, title: 'Financial Strategies', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-300">Newsroom</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((news) => (
          <div key={news.id} className="bg-gray-200 p-4 rounded shadow hover:bg-gray-100 transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-700">{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsroom;
