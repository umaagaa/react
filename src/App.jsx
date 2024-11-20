import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movies from './helpers/movies';
import Card from './components/Card';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [moviesList] = useState(movies);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Movies Gallery</h1>
        <Routes>
          {}
          <Route
            path="/"
            element={
              moviesList.length === 0 ? (
                <p className="text-center text-lg text-gray-500">There is no movie to display.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {moviesList.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                  ))}
                </div>
              )
            }
          />
          {/* Ruta za detalje o filmu */}
          <Route path="/details/:id" element={<MovieDetails movies={moviesList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
