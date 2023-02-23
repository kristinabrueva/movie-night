import { createContext, useContext } from "react";
import { MovieType } from "../types";

export type MovieContent = {
  movies: MovieType[];
  setMovies: any;
  searchResults: { results: MovieType[]; query?: string };
  setSearchResults: any;
};

export const MovieContext = createContext<MovieContent>({
  movies: [],
  searchResults: { results: [] },
  setMovies: () => {},
  setSearchResults: () => {},
});

export const useMovieContext = () => useContext(MovieContext);
