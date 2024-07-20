import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

function MovieList({ title, movies }) {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
