import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300'; // Placeholder image

  return (
    <div className="movie-card">
      <img src={posterPath} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">Année: {new Date(movie.release_date).getFullYear()}</p>
        <p className="movie-rating">Note: {movie.vote_average}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;