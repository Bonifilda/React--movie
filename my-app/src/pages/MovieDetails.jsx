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

  if (loading) return <div className="flex justify-center items-center h-screen text-sky-400 text-xl font-semibold
    ">Loading movie details...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500 text-lg">Error: {error}</div>;
  if (!movie) return <div className="flex justify-center items-center h-screen text-gray-400">Movie not found</div>;

  // Remove HTML tags from summary
  const cleanSummary = movie.summary ? movie.summary.replace(/<[^>]*>/g, '') : 'No summary available';

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img 
            src={movie.image?.original || 'https://via.placeholder.com/500x750?text=No+Image'} 
            alt={movie.name} 
            className="w-full max-w-sm rounded-2xl shadow-lg border border-gray-700" 
          />
        </div>
        <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-3">
          <h1>{movie.name}</h1>
          
          <div className=" px-3 py-1 rounded-full">
            {movie.rating?.average && <span className=" px-3 py-1 rounded-full">⭐ {movie.rating.average}/10</span>}
            {movie.premiered && <span className=" px-3 py-1 rounded-full">({new Date(movie.premiered).getFullYear()})</span>}
            {movie.runtime && <span className=" px-3 py-1 rounded-full">{movie.runtime} min</span>}
          </div>
          
          {movie.genres && movie.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {movie.genres.map(genre => (
                <span key={genre} className="bg-sky-600/20 text-sky-300 px-3 py-1 rounded-full text-sm">{genre}</span>
              ))}
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-sky-400 mb-2"> Summary</h3>
            <p className="text-gray-300 leading-relaxed">{cleanSummary}</p>
          </div>
          
          {movie.network && (
            <div className="text-lg font-semibold text-sky-400">
              <h3>Network</h3>
              <p>{movie.network.name}</p>
            </div>
          )}
          
          {movie.schedule && (
            <div className="text-lg font-semibold text-sky-400">
              <h3>Schedule</h3>
              <p>
                {movie.schedule.days.join(', ')} at {movie.schedule.time || 'N/A'}
                {movie.status && ` (${movie.status})`}
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => toggleFavorite(movie)} 
              className={`favorite-button ${isFavorite(movie.id) ? 'favorited' : ''}`}
            >
              {isFavorite(movie.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
            <Link to="/" className="px-5 py-2 bg-sky-500 hover:bg-sky-600 rounded-full text-white font-semibold transition-all duration-300">Back to Movies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
