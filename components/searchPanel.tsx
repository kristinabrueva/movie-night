import React, { useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import clsx from "clsx";

export const SearchPanel: React.FunctionComponent = () => {
  const { setMovies } = useMovieContext();
  const [inputValue, setInputValue] = useState<string>("");
  const handleSearch = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}&query=${inputValue}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className={clsx("max-w-side-panel p-3 gap-4 flex flex-col")}>
      <div
        className={clsx(
          "flex flex-col gap-2 max-w-side-panel  p-3 shadow-block border rounded-md"
        )}
      >
        <fieldset className={clsx("flex flex-col gap-2 max-w-xs")}>
          <label className={clsx(" font-light text-base")} htmlFor="movie">
            Search
          </label>
          <input
            className={clsx(
              "border border-slate-300 rounded-md py-1.5 px-2 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-light-blue focus:ring-1 focus:ring-light-blue"
            )}
            id="movie"
            placeholder="Search by title..."
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </fieldset>
      </div>
      <div>
        <button
          className={clsx(
            "border bg-light-blue text-white h-11 p-y-2 w-full  rounded-full "
          )}
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
