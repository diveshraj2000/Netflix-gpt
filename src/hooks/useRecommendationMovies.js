import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { addRecommendedMovies } from '../Utils/movieSlice';

function useRecommendationMovies() {
  const dispatch = useDispatch();
  const getRecommendedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addRecommendedMovies(json.results));
  };

  useEffect(() => {
    getRecommendedMovies();
  }, []);
}

export default useRecommendationMovies;
