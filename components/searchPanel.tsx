import React, { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import clsx from "clsx";

export const SearchPanel: React.FunctionComponent = () => {
  const { movies, setSearchResults } = useMovieContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = async () => {
    if (inputValue) {
      setSearchResults(
        {
          results: [...movies].filter((e) =>
            e.title.toLowerCase().includes(inputValue.toLowerCase())
          ),
        } || { results: [], query: inputValue }
      );
    } else setSearchResults({ results: [], query: "" });
  };

  return (
    <div className={clsx("max-w-side-panel p-3")}>
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
      <div className={clsx("mt-4")}>
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
