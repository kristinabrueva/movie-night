import React, { useEffect, useState } from "react";

import { useMovieContext } from "../context/MovieContext";
import { MovieType } from "../types";
import Movie from "./movie";

const MovieList: React.FunctionComponent = () => {
  const moviesPerPage = 20;
  const { searchResults } = useMovieContext();
  const [currentPage, setCurrentPage] = useState(1);
  const totalMovies = searchResults.results.length;
  const totalPages = totalMovies / moviesPerPage;
  const [currentMovies, setCurrentMovies] = useState<MovieType[]>([]);

  const indexOfLastMovie = currentPage * moviesPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchResults]);

  useEffect(() => {
    setCurrentMovies(searchResults.results.slice(0, indexOfLastMovie));
  }, [currentPage, indexOfLastMovie, searchResults]);

  return (
    <div className="flex flex-col items-center gap-8 w-full z-0">
      {searchResults.query && (
        <div className="text-lg self-start text-slate-500">
          Search results for
          <span className="italic text-black">
            &apos;{searchResults.query}&apos;
          </span>
        </div>
      )}
      {!searchResults.results.length && (
        <div className={"text-2xl"}>Sorry, no movies have been found :(</div>
      )}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {currentMovies.map((movie, id) => (
          <Movie key={id} movie={movie} />
        ))}
      </div>
      {currentPage < totalPages && (
        <div className="flex w-full">
          <button
            className="bg-light-blue text-white p-3 rounded-lg w-full hover:text-dark-blue font-semibold text-2xl"
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
