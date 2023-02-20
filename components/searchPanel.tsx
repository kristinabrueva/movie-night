import React, { useState } from "react";
import { useMovieContext } from "../context/MovieContext";

export const SearchPanel: React.FunctionComponent = () => {
  const { setMovies } = useMovieContext();
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div>
      <fieldset>
        <label htmlFor="movie">Search</label>
        <input
          id="movie"
          placeholder="search..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </fieldset>
      <div>
        <button
          onClick={async () => {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_MOVIE_API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}&query=${inputValue}`
            );
            const data = await response.json();
            setMovies(data.results);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
