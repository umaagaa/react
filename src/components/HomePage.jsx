import React from 'react';
import Card from './Card';

const HomePage = ({ itemsList }) => {
  if (!itemsList || itemsList.length === 0) {
    return <p className="text-center text-lg text-gray-500">There are no items to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {itemsList.map((item) => (
        <Card key={item.id} item={item} type={item.title ? 'movies' : 'shows'} />
      ))}
    </div>
  );
};

export default HomePage;
