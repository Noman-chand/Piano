import React from 'react';

function TvShowDetail({ id, setViewTvShow, tvGenre }) {
  const tvShowDetail = tvGenre.find(val => val.id === id);

//   if (!tvShowDetail) return null; // Return null if tvShowDetail is not found

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${tvShowDetail.backdrop_path}`}
          alt={tvShowDetail.original_title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{tvShowDetail.original_title}</h2>
          <p className="text-gray-700 text-base mb-4">{tvShowDetail.overview}</p>
          <p className="text-gray-700">Title: {tvShowDetail.title}</p>
          <p className="text-gray-700">Vote Average: {tvShowDetail.vote_average}</p>
          <button
            onClick={() => setViewTvShow(false)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TvShowDetail;
