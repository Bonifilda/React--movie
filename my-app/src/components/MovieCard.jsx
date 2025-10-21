import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, addToFavorites, isFavorite }) => {
  // Extract image URL or use a placeholder
  const imageUrl = movie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  
  return (
    <div className="movie-card bg-white p-4 rounded-lg shadow-md">
      <img src={imageUrl} alt={movie.name} className="movie-poster" />
      <div className="movie-info text-gray-800">
        <h3>{movie.name}</h3>
        <p>{movie.genres?.join(', ')}</p>
        <div className="movie-actions">
          <Link to={`/movie/${movie.id}`} className="details-button text-blue-500">
            View Details
          </Link>
          <button 
            onClick={() => addToFavorites(movie)} 
            className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          >
            {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;