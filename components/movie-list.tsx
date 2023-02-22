import React, { useEffect, useState } from "react";
import Movie from "./movie";
import { useMovieContext } from "../context/MovieContext";
import { MovieType } from "../types";

const MovieList: React.FunctionComponent = () => {
  const moviesPerPage = 20;
  const { movies } = useMovieContext();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = movies.length / moviesPerPage;
  const [currentMovies, setCurrentMovies] = useState<MovieType[]>([]);

  const indexOfLastMovie = currentPage * moviesPerPage;

  useEffect(() => {
    setCurrentMovies(movies.slice(0, indexOfLastMovie));
  }, [currentPage, indexOfLastMovie]);

  useEffect(() => {
    setCurrentPage(1);
    setCurrentMovies(movies.slice(0, indexOfLastMovie));
  }, [movies]);

  return (
    <div className="p-14 flex flex-col items-center gap-8 w-full">
      <h1 className="text-4xl font-bold pb-5">Popular movies</h1>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {currentMovies.map((movie, id) => (
          <Movie key={id} movie={movie} />
        ))}
      </div>
      {currentPage < totalPages && (
        <div className="flex w-full">
          <button
            className=" bg-light-blue text-white p-3 rounded-full w-full hover:text-dark-blue font-semibold text-2xl"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieList;
