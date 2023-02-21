import { MovieType } from "../types";

export const formatDate = (originalDate: string): string => {
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

  const date = originalDate.split("-").reverse();
  return date[0] + " " + months[parseInt(date[1]) - 1] + ", " + date[2];
};
export const sortPopularAsc = (movies: MovieType[]) =>
  [...movies].sort((a, b) => (a.popularity > b.popularity ? 1 : -1));

export const sortPopularDesc = (movies: MovieType[]) =>
  [...movies].sort((a, b) => (a.popularity < b.popularity ? 1 : -1));

export const sortAsc = (movies: MovieType[]) =>
  [...movies].sort((a, b) => (a.vote_average > b.vote_average ? 1 : -1));

export const sortDesc = (movies: MovieType[]) =>
  [...movies].sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1));

export const sortTitleAsc = (movies: MovieType[]) =>
  [...movies].sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
  );

export const sortTitleDesc = (movies: MovieType[]) =>
  [...movies].sort((a, b) =>
    a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
  );
