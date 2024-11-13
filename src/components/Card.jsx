import React from 'react';

const Card = ({ movie }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto mb-2 rounded" />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default Card;
