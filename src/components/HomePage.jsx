import React, { useState } from 'react';
import Card from './Card';

const HomePage = ({ list, type, setType }) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        {type === 'movies' ? 'Movies Gallery' : 'Shows Gallery'}
      </h1>
      <div className='flex justify-center mb-4'>
        <button
          className='px-4 py-2 bg-blue-500 text-white rounded focus:outline-none'
          onClick={() => setType(type === 'movies' ? 'shows' : 'movies')}
        >
          {`Switch to ${type === 'movies' ? 'Shows' : 'Movies'}`}
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {list.map(item => (
          <Card key={item.id} item={item} type={type} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
