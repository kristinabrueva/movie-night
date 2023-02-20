import Head from "next/head";
import { useEffect, useState } from "react";
import MovieList from "../components/movie-list";
import { MovieContext } from "../context/MovieContext";
import { MovieType } from "../types";
import SearchPanel from "../components/searchPanel";

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const contextValue = { movies, setMovies };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}&language=en-US&page=1`
    );

    if (!response.ok) setError(true);

    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  };

  if (error) {
    return <div>Ooops, something went wrong...</div>;
  }

  return (
    <MovieContext.Provider value={contextValue}>
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="Popular movies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SearchPanel />
        {loading ? <div>Loading data...</div> : <MovieList />}
      </div>
    </MovieContext.Provider>
  );
}
