import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../api';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Movies.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies on component mount
  useEffect(() => {
    const fetchAndSetMovies = async () => {
      try {
        const data = await fetchMovies('/movie/popular'); // Fetch popular movies
        setMovies(data.results || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAndSetMovies();
  }, []);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">Erreur : {error}</div>;

  return (
    <div className="movies-container">
      <h2>Films Populaires</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;