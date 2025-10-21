import { useState, useEffect } from 'react';
import { fetchAllShows } from '../utils/api';

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchAllShows();
        // Limit to only 8 movies
        const limitedData = data.slice(0, 8);
        setMovies(limitedData);
        
        // Extract unique genres for category filtering
        const allGenres = limitedData.flatMap(movie => movie.genres || []);
        const uniqueGenres = [...new Set(allGenres)];
        setCategories(uniqueGenres);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, loading, error, categories };
};

export default useFetchMovies;