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
  const [selectedCategory, setSelectedCategory] = useState('')
  


  
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || (movie.genres && movie.genres.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="text-center text-sky-400 text-lg py-20 animate-pulse">Loading movies...</div>;
  if (error) return <div className="text-center text-red-500 text-lg py-20">Error: {error}</div>;

  return (
    <div className=" min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-12 py-10 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>
      
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          <div className="col-span-full text-center mt-16 text-gray-400 text-lg">No movies found matching your criteria.</div>
        )}
      </div>
    </div>
  );
};

export default Home;