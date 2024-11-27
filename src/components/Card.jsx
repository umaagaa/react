import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item, type }) => {
  const { id, title, vote_average, vote_count, poster_path } = item;
  const navigate = useNavigate();

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s';

  const handleCardClick = () => {
    navigate(`/${type}/details/${id}`);
  };

  return (
    <div
      className="bg-white p-4 rounded shadow relative cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
        {vote_count} votes
      </span>
      <img src={image} alt={title} className="min-h-[308px] mb-2 rounded" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>Rating: {vote_average.toFixed(1)}</p>
    </div>
  );
};

export default Card;
