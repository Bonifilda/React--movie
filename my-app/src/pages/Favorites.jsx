import React from 'react';
import MovieCard from '../components/MovieCard';
import useFavorites from '../hooks/useFavorites';

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center text-sky-400">Your Favorite Movies</h1>
      
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        <div className="flex flex-col  items-center justify-center text-center mt-20 space-y-4">
          <p className ="text-lg sm:text-xl text-gray-300">You haven't added any movies to your favorites yet.</p>
          <p className="text-sm sm:text-base text-gray-400 max-w-md">Go back to the home page and click the heart icon to add movies to your favorites.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;