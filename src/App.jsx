import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movies from './helpers/movies';
import shows from './helpers/shows';
import HomePage from './components/HomePage';
import DetailsCard from './components/DetailsCard';

const App = () => {
  const [moviesList] = useState(movies);
  const [showsList] = useState(shows);

  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route
          path="/"
          element={<HomePage moviesList={moviesList} showsList={showsList} />}
        />

        {/* Details */}
        <Route
          path="/details/:type/:id"
          element={<DetailsCard moviesList={moviesList} showsList={showsList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
