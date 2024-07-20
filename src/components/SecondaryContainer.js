import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from './../hooks/useNowPlayingMovies';
function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  // console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.recommendedMovies} />
          <MovieList title="Trending" movies={movies.trendingMovies} />
          <MovieList title="Upcoming" movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
}

// import React, { useEffect, useState } from 'react';
// import MovieList from './MovieList';
// import { useSelector } from 'react-redux';

// function SecondaryContainer() {
//   const storeMovies = useSelector((store) => store.movies);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     if (storeMovies?.nowPlayingMovies) {
//       setMovies(storeMovies.nowPlayingMovies);
//     } else {
//       setMovies([]); // Default to an empty array if movies are not available
//     }
//   }, [storeMovies]);

//   console.log(movies);

//   return (
//     <div>
//       <MovieList title="Now Playing" movies={movies} />
//       <MovieList title="Trending" movies={movies} />
//       <MovieList title="Horror" movies={movies} />
//       <MovieList title="Now Playing" movies={movies} />
//     </div>
//   );
// }
export default SecondaryContainer;
