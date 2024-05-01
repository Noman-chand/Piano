import React, { useEffect } from 'react';
import { fetchApiData } from './utlis/api';
import { getUrlData } from './RTK/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './pages/Details';
import Explore from './pages/Explore';
import Home from './pages/home/Home';
import SearchResult from './pages/SearchResult';
import NotFound from './pages/NotFound';
import TvShow from './Components/TvShow';
import Movies from './Components/Movies';
function App() {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        fetchApiConfig();
    },[]);

    const fetchApiConfig = () => {
        fetchApiData('/configuration')
            .then((res) => {
                // console.log(res);
                const imagesUrl = {
                    backdrop: res.images.secure_base_url + "w1280", // Adjusted size to w1280
                    poster: res.images.secure_base_url + "w780",
                    profile: res.images.secure_base_url + "w780",
                }
                dispatch(getUrlData(imagesUrl));
            })
            .catch((error) => {
                console.error('Error fetching configuration:', error);
            });
    }
    return (
        <>
        <div className=' bg-black'>
            <BrowserRouter>
                 <Header /> 
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:mediaType/:id' element={<Details />} />
                    <Route path='/search/:searchData' element={<SearchResult />} />
                    <Route path='/explore/:mediaType' element={<Explore />} />
                    <Route path='/movie' element={<Movies />} />
                    <Route path='/tv' element={<TvShow />}/>     
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <hr className=' bg-white'/>
            <Footer/> 
            </BrowserRouter>
            </div>
        </>
    );
}
export default App;
