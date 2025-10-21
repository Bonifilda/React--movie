import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchShowById } from '../utils/api';
import useFavorites from '../hooks/useFavorites';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchShowById(id);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!movie) return <div className="not-found">Movie not found</div>;

  // Remove HTML tags from summary
  const cleanSummary = movie.summary ? movie.summary.replace(/<[^>]*>/g, '') : 'No summary available';

  return (
    <div className="movie-details">
      <div className="movie-details-container">
        <div className="movie-poster-container">
          <img 
            src={movie.image?.original || 'https://via.placeholder.com/500x750?text=No+Image'} 
            alt={movie.name} 
            className="movie-poster-large" 
          />
        </div>
        <div className="movie-info-container">
          <h1>{movie.name}</h1>
          
          <div className="movie-meta">
            {movie.rating?.average && <span className="rating">⭐ {movie.rating.average}/10</span>}
            {movie.premiered && <span className="year">({new Date(movie.premiered).getFullYear()})</span>}
            {movie.runtime && <span className="runtime">{movie.runtime} min</span>}
          </div>
          
          {movie.genres && movie.genres.length > 0 && (
            <div className="genres">
              {movie.genres.map(genre => (
                <span key={genre} className="genre-tag">{genre}</span>
              ))}
            </div>
          )}
          
          <div className="summary">
            <h3>Summary</h3>
            <p>{cleanSummary}</p>
          </div>
          
          {movie.network && (
            <div className="network">
              <h3>Network</h3>
              <p>{movie.network.name}</p>
            </div>
          )}
          
          {movie.schedule && (
            <div className="schedule">
              <h3>Schedule</h3>
              <p>
                {movie.schedule.days.join(', ')} at {movie.schedule.time || 'N/A'}
                {movie.status && ` (${movie.status})`}
              </p>
            </div>
          )}
          
          <div className="actions">
            <button 
              onClick={() => toggleFavorite(movie)} 
              className={`favorite-button ${isFavorite(movie.id) ? 'favorited' : ''}`}
            >
              {isFavorite(movie.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
            <Link to="/" className="back-button">Back to Movies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;