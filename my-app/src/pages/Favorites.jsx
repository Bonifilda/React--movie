import React from 'react';
import MovieCard from '../components/MovieCard';
import useFavorites from '../hooks/useFavorites';

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="favorites-container">
      <h1>Your Favorite Movies</h1>
      
      {favorites.length > 0 ? (
        <div className="movies-container">
          {favorites.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              addToFavorites={toggleFavorite} 
              isFavorite={isFavorite(movie.id)} 
            />
          ))}
        </div>
      ) : (
        <div className="no-favorites">
          <p>You haven't added any movies to your favorites yet.</p>
          <p>Go back to the home page and click the heart icon to add movies to your favorites.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;