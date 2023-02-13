import React from "react";
import Movie from "./movie";
import { MovieType } from "../pages";

interface moviesProps {
  movies: MovieType[];
}

const MovieList: React.FunctionComponent<moviesProps> = ({ movies }) => {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1>The most popular movies</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
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
    </div>
  );
};

export default MovieList;
