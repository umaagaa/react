import React from 'react';
import movies from './helpers/movies'; 
import Card from './components/Card'; 

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movies Gallery</h1>
      <div className="grid grid-cols-6 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
