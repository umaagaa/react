import React, { useState } from 'react';
import moviesData from './helpers/movies'; // Pravilno importujemo moviesData iz movies.js
import Card from './components/Card'; 

const App = () => {
  const [movies, setMovies] = useState(moviesData); // Inicijaliziramo movies sa moviesData

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movies Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} onDelete={() => handleDelete(movie.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;
