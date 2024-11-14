import React from 'react';

const Card = ({ movie }) => {

    const { title, vote_average, poster_path } = movie; //destructuring

    // Make sure to have a default image in case the movie doesn't have a poster
    const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s';
    return (
        <div className="bg-white p-4 rounded shadow">
            <img src={image} alt={title} className="min-h-[308px] mb-2 rounded" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>Rating: {vote_average}</p>
        </div>
    );
};

export default Card;
