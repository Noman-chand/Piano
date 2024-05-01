import React, { useState } from 'react';
import ViewHomeMovie from './ViewHomeMovie';

function MoviesCard({ data }) {
  const [view, setView] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // console.log(data)


  const openDetailView = (id) => {
    setSelectedMovie(id);
    setView(true);
  };

  return (
    <div className="relative">
      <div className={`bg-gray-800 p-4 rounded-lg shadow-md text-white ${view ? 'filter blur-sm' : ''}`}>
        <h2 className="text-xl font-bold mb-4">DisCover</h2>
        {data ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((movie) => (
              <div key={movie.id} className="bg-gray-700 rounded-lg p-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-64 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{movie.original_title}</h3>
                <button
                  onClick={() => openDetailView(movie.id)}
                  className="mt-2 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold focus:outline-none focus:ring focus:ring-blue-200"
                >
                  View Detail
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {view && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <ViewHomeMovie
            movie={data.find((movie) => movie.id === selectedMovie)}
            closeDetailView={() => setView(false)}
          />
        </div>
      )}
    </div>
  );
}

export default MoviesCard;
