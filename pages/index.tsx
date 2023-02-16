import Head from "next/head";
import { useEffect, useState } from "react";
import MovieList from "../components/movie-list";

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
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
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Popular movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <div>Loading data...</div> : <MovieList movies={movies} />}
    </div>
  );
}
