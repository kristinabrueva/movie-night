import React from "react";
import Movie from "./movie";
import { MovieType } from "../pages";

interface moviesProps {
  movies: MovieType[];
}

const MovieList: React.FunctionComponent<moviesProps> = ({ movies }) => {
  return (
    <div>
      The most popular movies
      {movies.map((movie, id) => (
        <Movie
          key={id}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          title={movie.title}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
