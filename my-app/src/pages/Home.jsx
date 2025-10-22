import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import useFetchMovies from '../hooks/useFetchMovies';
import useFavorites from '../hooks/useFavorites';

const Home = () => {
  const { movies, loading, error, categories } = useFetchMovies();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter movies based on search term and selected category
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || (movie.genres && movie.genres.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="loading">Loading movies...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-container text-shadow-black ">
      <div className="filters-container text-black">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>
      
      <div className="movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              addToFavorites={toggleFavorite} 
              isFavorite={isFavorite(movie.id)} 
            />
          ))
        ) : (
          <div className="no-movies">No movies found matching your criteria.</div>
        )}
      </div>
    </div>
  );
};

export default Home;