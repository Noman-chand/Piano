import React from 'react';

function ViewHomeMovie({ movie, closeDetailView }) {
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md mt-12">
      <img
        className="h-64 w-full object-cover"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{movie.original_title}</h2>
        <p className="text-gray-700 text-base mb-4">{movie.overview}</p>
        <p className="text-gray-700">Title: {movie.title}</p>
        <p className="text-gray-700">Vote Average: {movie.vote_average}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={closeDetailView}
        >
          Undo
        </button>
      </div>
    </div>
  );
}

export default ViewHomeMovie;
