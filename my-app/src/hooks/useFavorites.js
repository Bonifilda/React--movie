import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('movieFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  const saveFavorites = (updatedFavorites) => {
    localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  // Add or remove a movie from favorites
  const toggleFavorite = (movie) => {
    const isFav = favorites.some(fav => fav.id === movie.id);
    
    if (isFav) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
      saveFavorites(updatedFavorites);
    } else {
      // Add to favorites
      saveFavorites([...favorites, movie]);
    }
  };

  // Check if a movie is in favorites
  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
};

export default useFavorites;