import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UseFetch from '../CustomHook/UseFetch';
import { getTVGenre } from '../RTK/homeSlice';
import TvShowDetail from './TvShowDetail';

function TvShow() {
  const { data: tvData } = UseFetch('/discover/tv');
  const dispatch = useDispatch();
  const { tvGenre } = useSelector((state) => state.home);

  const [selectedTvShowId, setSelectedTvShowId] = useState(null);
  const [viewTvShow, setViewTvShow] = useState(false);

  useEffect(() => {
    if (tvData && tvData.results && tvData.results.length > 0) {
      dispatch(getTVGenre(tvData.results)); // Dispatch action to store TV genres
    }
  }, [tvData, dispatch]);

  console.log(tvGenre);

  const handleView = (id) => {
    setSelectedTvShowId(id);
    setViewTvShow(true);
  }

  return (
    <>
      <div className='text-yellow-300'>TV Shows</div>
      {viewTvShow && (
        <TvShowDetail 
          id={selectedTvShowId}
          setViewTvShow={setViewTvShow}
          tvGenre ={tvGenre}
        />
      )}
      <div className="grid grid-cols-3 gap-4">
        {tvGenre.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white relative">
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.original_name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.original_name}</h2>
              <button onClick={() => handleView(item.id)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TvShow;
