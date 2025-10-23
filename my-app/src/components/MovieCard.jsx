import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, addToFavorites, isFavorite }) => {
  // Extract image URL or use a placeholder
  const imageUrl = movie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  
  return (
    <div className="bg-pink-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col ">
      <img src={imageUrl} alt={movie.name} className="w-full h-72 object-cover" />
      <div className="p-4 flex flex-col  justify-between">
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{movie.name}</h3>
        {/* cuts long text after 1 line. */}
        <p>{movie.genres?.join(', ')}</p>
        <div className="text-sm text-gray-400 line-clamp-2">
          <Link to={`/movie/${movie.id}`} className="flex-1 text-center bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-full transition duration-300">
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