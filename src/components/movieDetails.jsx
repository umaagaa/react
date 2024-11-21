import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ moviesList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesList.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <div className="text-center">
        <p className="text-lg text-gray-500">Movie not found!</p>
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
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s'
        }
        alt={movie.title}
        className="rounded mb-4"
      />
      <p className="text-lg">Rating: {movie.vote_average.toFixed(1)}</p>
      <p className="text-lg">Votes: {movie.vote_count}</p>
      <p className="text-lg">Release Date: {movie.release_date}</p>
      <p className="text-gray-600 mt-2">{movie.overview}</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Movies
      </button>
    </div>
  );
};

export default MovieDetails;
