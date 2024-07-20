import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addTopTrendingMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';

const useTopTrendingMovies = () => {
  //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const topTrendingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopTrendingMovies(json.results));
  };

  useEffect(() => {
    topTrendingMovies();
  }, []);
};

export default useTopTrendingMovies;
