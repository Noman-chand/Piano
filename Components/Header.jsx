import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { seacrhMovie } from '../RTK/homeSlice';
import { useLocation } from 'react-router-dom';
function Header() {
  const [searchData, setSearchData] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const {pathname} = useLocation();
// console.log(location);



// const {genre} = useSelector( (state)=> state.home);
// console.log(genre)

useEffect( ()=>{
  dispatch(seacrhMovie(searchData))
},[searchData])


  // const searchDataHandle = (e) => {
  //   if (e.key === 'Enter' && searchData.length > 0) {
  //     navigate(`/search/${searchData}`);
  //     setSearchData('');
  //     setShowSearch(false);
  //   }
  // };

  const openSearch = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/movie');
    } else if (type === 'tv') {
      navigate('/tv');
    } else {
      navigate('/trending');
    }
  };

  // const handleSearchChange = (e) => {
  //   dispatch(seacrhMovie(setSearchData(e.target.value))); // Dispatching the search action with the updated search data
  // };
  // console.log(searchData)

  return (
    <>
  
  
      <nav className="bg-gray-800 text-white py-2 px-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img src="movix-logo.png" alt="" className="h-8 pl-4" />
          <ul className="flex space-x-4 mr-4">
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => navigationHandler('movie')}>
              Movies
            </li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => navigationHandler('tv')}>
              TV Shows
            </li>
            <li className="hover:text-gray-300 cursor-pointer size-10" onClick={openSearch}>
              <CiSearch />
            </li>
          </ul>
        </div>
      </nav>

      {showSearch && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 transform scale-105">
            <input
              type="text"
              value={searchData}
              className="bg-white text-black outline-none py-2 px-4 rounded-l-md w-80"
              placeholder="Search for Movies and TV shows"
              onChange={(e)=> setSearchData(e.target.value)}
            />
            <button className="flex items-center justify-center rounded-r-md h-10 w-10 bg-white" onClick={closeSearch}>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
