import { MovieType } from "../types";

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (originalDate: string): string => {
  if (originalDate) {
    const date = originalDate.split("-").reverse();
    return date[0] + " " + months[parseInt(date[1]) - 1] + ", " + date[2];
  }
  return "";
};

export const sortPopularAsc = (movies: MovieType[]) => {
  return {
    results: [...movies].sort((a, b) => (a.popularity > b.popularity ? 1 : -1)),
  };
};

export const sortPopularDesc = (movies: MovieType[]) => {
  return {
    results: [...movies].sort((a, b) => (a.popularity < b.popularity ? 1 : -1)),
  };
};

export const sortAsc = (movies: MovieType[]) => {
  return {
    results: [...movies].sort((a, b) =>
      a.vote_average > b.vote_average ? 1 : -1
    ),
  };
};

export const sortDesc = (movies: MovieType[]) => {
  return {
    results: [...movies].sort((a, b) =>
      a.vote_average < b.vote_average ? 1 : -1
    ),
  };
};

export const sortTitleAsc = (movies: MovieType[]) => {
  return {
    results: [...movies].sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    ),
  };
};

export const sortTitleDesc = (movies: MovieType[]) => {
  return {
    results: [...movies].sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
    ),
  };
};

export const getMovieGenres = (genre_ids: number[]) =>
  genre_ids.map((id) => genres.find((g) => g.id === id)?.name);
