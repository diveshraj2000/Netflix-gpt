import React, { useEffect, useState } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
const Browse = () => {
  const [movieData, setMovieData] = useState([]);

  const Data = useNowPlayingMovies();

  useEffect(() => {
    if (Data) {
    }
    setMovieData(Data);
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
