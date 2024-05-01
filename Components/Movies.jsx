import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UseFetch from '../CustomHook/UseFetch';
import { getGenre } from '../RTK/homeSlice';
import MovieCardDetail from './MovieCardDetail';

function Movies() {
  const { data: movieData } = UseFetch('/discover/movie');
  const dispatch = useDispatch();
  const { genre } = useSelector((state) => state.home);

  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  useEffect(() => {
    if (movieData && movieData.results && movieData.results.length > 0) {
      dispatch(getGenre(movieData.results)); // Dispatch action to store movie genres
    }
  }, [movieData, dispatch]);

  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
    setShowMovieDetail(true);
  };

  // Check if movieData or movieData.results is not available yet
  if (!movieData || !movieData.results) {
    return <div>Loading...</div>;
  }

  // Find the selected movie from movieData based on id
  const selectedMovie = movieData.results.find(movie => movie.id === selectedMovieId);

  return (
    <div className="relative">
      <div className='text-yellow-300'>Movies</div>
    
      <div className="grid grid-cols-3 gap-4">
        {genre.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white relative">
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.original_title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.original_title}</h2>
              <button onClick={() => handleMovieClick(item.id)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Details</button>
            </div>
          </div>
        ))}
      </div>

      {showMovieDetail && selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <MovieCardDetail
            movie={selectedMovie}
            setMovieView={setShowMovieDetail}
          />
        </div>
      )}
    </div>
  );
}

export default Movies;
