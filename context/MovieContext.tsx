import { createContext, useContext } from "react";
import { MovieType } from "../types";

export const MovieContext = createContext<MovieType[]>([]);

export const useMovieContext = () => useContext(MovieContext);
