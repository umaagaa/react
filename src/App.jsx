import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import movies from './helpers/movies';
import shows from './helpers/shows';
import Card from './components/Card';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [moviesList] = useState(movies);
  const [showsList] = useState(shows);
  const [activeType, setActiveType] = useState('movies');
  

  const Header = () => {
    const location = useLocation();
    return location.pathname === '/' ? (
      <h1 className="text-2xl font-bold mb-4">Movies and Shows Gallery</h1>
    ) : null;
  };

  const filteredList = activeType === 'movies' ? moviesList : showsList;

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Header />
        {/* Toggle Button */}
        <div className="flex justify-center mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
            onClick={() => setActiveType((prev) => (prev === 'movies' ? 'shows' : 'movies'))}
          >
            {activeType === 'movies' ? 'Switch to Shows' : 'Switch to Movies'}
          </button>
        </div>

        <Routes>
          {/* Main Site */}
          <Route
            path="/"
            element={
              filteredList.length === 0 ? (
                <p className="text-center text-lg text-gray-500">There are no items to display.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {filteredList.map((item) => (
                    <Card key={item.id} item={item} type={activeType} />
                  ))}
                </div>
              )
            }
          />

          {/* Details Route */}
          <Route
            path="/movies/details/:id"
            element={<MovieDetails itemsList={moviesList} />}
          />
          <Route
            path="/shows/details/:id"
            element={<MovieDetails itemsList={showsList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
