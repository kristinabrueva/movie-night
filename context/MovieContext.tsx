import { createContext, useContext } from "react";
import { MovieType } from "../types";

export type MovieContent = {
  movies: MovieType[];
  setMovies: any;
};

export const MovieContext = createContext<MovieContent>({
  movies: [],
  setMovies: () => {},
});

export const useMovieContext = () => useContext(MovieContext);
