import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movies from './helpers/movies';
import shows from './helpers/shows';
import HomePage from './components/HomePage';
import DetailsCard from './components/DetailsCard';
import Modal from './components/Modal';

const App = () => {
  const [moviesList, setMoviesList] = useState(movies); // movies.js
  const [showsList, setShowsList] = useState(shows); // shows.js
  const [activeType, setActiveType] = useState('movies'); 
  const [isModalOpen, setIsModalOpen] = useState(false); // show modal

  const toggleType = () => {
    setActiveType((prev) => (prev === 'movies' ? 'shows' : 'movies'));
  };

  const handleAddItem = (newItem) => {
    if (activeType === 'movies') {
      setMoviesList((prev) => [...prev, newItem]); // new movie
    } else {
      setShowsList((prev) => [...prev, newItem]); // new show
    }
  };

  const currentList = activeType === 'movies' ? moviesList : showsList; // showing list


  return (
    <Router>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            {activeType === 'movies' ? 'Movies Gallery' : 'Shows Gallery'}
          </h1>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={toggleType}
            >
              {activeType === 'movies' ? 'Switch to Shows' : 'Switch to Movies'}
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setIsModalOpen(true)}
            >
              Add New {activeType === 'movies' ? 'Movie' : 'Show'}
            </button>
          </div>
        </header>

        {/* Modal for new items */}
        {isModalOpen && (
          <Modal
            activeType={activeType}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddItem}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={<HomePage itemsList={currentList} activeType={activeType} />}
          />
          <Route
            path="/details/:id"
            element={<DetailsCard itemsList={[...moviesList, ...showsList]} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
