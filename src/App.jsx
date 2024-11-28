import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movies from './helpers/movies';
import shows from './helpers/shows';
import HomePage from './components/HomePage';
import DetailsCard from './components/DetailsCard';

const App = () => {
  const [list, setList] = useState(movies);
  const [type, setType] = useState('movies');

  useEffect(() => {
    if (type === 'movies') {
      setList(movies);
    } else {
      setList(shows);
    }
  }, [type]);

  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route
          path='/'
          element={<HomePage list={list} type={type} setType={setType} />}
        />

        {/* Details */}
        <Route
          path='/details/:type/:id'
          element={<DetailsCard list={list} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
