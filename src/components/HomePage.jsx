import React, { useState } from 'react';
import Card from './Card';

const HomePage = ({ moviesList = [], showsList = [], activeType }) => {
    const filteredList =
      activeType === 'movies' ? moviesList : activeType === 'shows' ? showsList : [];
  
    return (
      <div>
        {filteredList.length === 0 ? (
          <p className="text-center text-lg text-gray-500">There are no items to display.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredList.map((item) => (
              <Card key={item.id} item={item} type={activeType} />
            ))}
          </div>
        )}
      </div>
    );
  };
  

export default HomePage;
