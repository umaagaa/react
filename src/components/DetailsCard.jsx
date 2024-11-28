import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailsCard = ({ moviesList, showsList }) => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const list = type === 'movies' ? moviesList : showsList;
  const item = list.find((i) => i.id.toString() === id);

  if (!item) {
    return (
      <div className="text-center">
        <p className="text-lg text-gray-500">Item not found!</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <img
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Image'
        }
        alt={item.title}
        className="rounded mb-4"
      />
      <p className="text-lg">Rating: {item.vote_average.toFixed(1)}</p>
      <p className="text-lg">Votes: {item.vote_count}</p>
      <p className="text-lg">Release Date: {item.release_date}</p>
      <p className="text-gray-600 mt-2">{item.overview}</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default DetailsCard;
