import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p className="text-center text-lg text-red-500">Movie not found!</p>;
  }

  const { title, vote_average, overview, poster_path } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s';

  return (
    <div className="text-center p-4">
      <img src={image} alt={title} className="max-w-md mx-auto mb-4 rounded" />
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-lg text-gray-700">Rating: {vote_average.toFixed(1)}</p>
      <p className="mt-4">{overview || 'No description available.'}</p>
    </div>
  );
};

export default MovieDetails;
