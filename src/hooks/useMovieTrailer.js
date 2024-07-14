import React from 'react';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/movieSlice';

function useMovieTrailer(movieId) {
  console.log(movieId);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/videos?language=en-US',
      API_OPTIONS
    );
    const movieVideo = await data.json();
    console.log(movieVideo);
    const filterData = movieVideo?.results.filter(
      (video) => video.type === 'Trailer'
    );
    console.log(filterData);
    const trailer = filterData.length ? filterData[0] : movieVideo[0];
    //disaptaching the action
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;
