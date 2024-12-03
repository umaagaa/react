import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movies from './helpers/movies';
import shows from './helpers/shows';
import HomePage from './components/HomePage';
import DetailsCard from './components/DetailsCard';
import Modal from './components/Modal';

const App = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const [showsList, setShowsList] = useState(shows);
  const [activeType, setActiveType] = useState('movies');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const addNewItem = (newItem) => {
    if (activeType === 'movies') {
      setMoviesList((prev) => [...prev, newItem]);
    } else {
      setShowsList((prev) => [...prev, newItem]);
    }
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          {}
          <Route
            path="/"
            element={
              <>
                <HomePage
                  moviesList={moviesList}
                  showsList={showsList}
                  activeType={activeType}
                  setActiveType={setActiveType}
                />
                {}
                <div className="text-center mt-4">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add New {activeType === 'movies' ? 'Movie' : 'Show'}
                  </button>
                </div>
                {}
                {isModalOpen && (
                  <Modal
                    activeType={activeType}
                    onClose={() => setIsModalOpen(false)}
                    onAdd={addNewItem}
                  />
                )}
              </>
            }
          />
          {}
          <Route
            path="/details/:type/:id"
            element={<DetailsCard moviesList={moviesList} showsList={showsList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
