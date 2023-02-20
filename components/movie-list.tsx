import React, { useContext } from "react";
import Movie from "./movie";
import { MovieContext } from "../context/MovieContext";

const MovieList: React.FunctionComponent = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="p-14 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold pb-5">Popular movies</h1>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie, id) => (
          <Movie key={id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
