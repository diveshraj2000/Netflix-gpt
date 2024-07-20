import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results.reverse()));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
