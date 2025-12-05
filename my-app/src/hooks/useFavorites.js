import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('movieFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  
  const saveFavorites = (updatedFavorites) => {
    localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  
  const toggleFavorite = (movie) => {
    const isFav = favorites.some(fav => fav.id === movie.id);
    
    if (isFav) {
    
      const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
      saveFavorites(updatedFavorites);
    } else {
      
      saveFavorites([...favorites, movie]);
    }
  };

  
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