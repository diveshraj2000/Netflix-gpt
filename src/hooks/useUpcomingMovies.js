import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addUpcomingMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';
function useUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results.reverse()));
  };

  useEffect(() => {
    upcomingMovies();
  }, []);
}

export default useUpcomingMovies;
