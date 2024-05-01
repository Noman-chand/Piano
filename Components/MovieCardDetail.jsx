import React from 'react';

function MovieCardDetail({ movie, setMovieView }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{movie.original_title}</h2>
          <p className="text-gray-700 text-base mb-4">{movie.overview}</p>
          <p className="text-gray-700">Title: {movie.title}</p>
          <p className="text-gray-700">Vote Average: {movie.vote_average}</p>
          <button onClick={() => setMovieView(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Undo
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCardDetail;
