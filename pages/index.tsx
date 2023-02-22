import Head from "next/head";
import { useEffect, useState } from "react";
import MovieList from "../components/movie-list";
import { MovieContext } from "../context/MovieContext";
import { MovieType } from "../types";
import clsx from "clsx";
import SortPanel from "../components/sortPanel";

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const contextValue = { movies, setMovies };

  const fetchUrl = `${process.env.NEXT_PUBLIC_MOVIE_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}&language=en-US&page=`;

  useEffect(() => {
    const moviePromises = [1, 2, 3, 4, 5].map((obj) =>
      fetch(`${fetchUrl}${obj}`).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
    );
    Promise.all(moviePromises)
      .then((data) => {
        setMovies(data.flatMap((i) => i.results));
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [fetchUrl]);

  if (!!error) {
    return (
      <div
        className={
          "text-2xl align-middle h-screen justify-center flex flex-col gap-4 items-center"
        }
      >
        <span>Ooops... {error} </span>
        <span> Refresh your page or try again later.</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className={
          "text-2xl align-middle h-screen justify-center flex flex-col gap-4 items-center"
        }
      >
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <MovieContext.Provider value={contextValue}>
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="Popular movies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={clsx("flex gap-2")}>
          <SortPanel />
          <MovieList />
        </div>
      </div>
    </MovieContext.Provider>
  );
}
