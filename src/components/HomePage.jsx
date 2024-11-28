import React, { useState } from 'react';
import Card from './Card';

const HomePage = ({ moviesList, showsList }) => {
  const [activeType, setActiveType] = useState('movies');

  const filteredList = activeType === 'movies' ? moviesList : showsList;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {activeType === 'movies' ? 'Movies Gallery' : 'Shows Gallery'}
      </h1>
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
          onClick={() => setActiveType(activeType === 'movies' ? 'shows' : 'movies')}
        >
          {activeType === 'movies' ? 'Switch to Shows' : 'Switch to Movies'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filteredList.map((item) => (
          <Card key={item.id} item={item} type={activeType} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
