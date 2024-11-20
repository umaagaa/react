import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ movie }) => {
  const { id, title, vote_average, poster_path } = movie;
  const navigate = useNavigate();

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s';

  const handleCardClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="bg-white p-4 rounded shadow cursor-pointer" onClick={handleCardClick}>
      <img src={image} alt={title} className="min-h-[308px] mb-2 rounded" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>Rating: {vote_average.toFixed(1)}</p>
    </div>
  );
};

export default Card;
