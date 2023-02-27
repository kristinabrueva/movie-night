import React, { useState } from "react";

import { useMovieContext } from "../context/MovieContext";

export const SearchPanel: React.FunctionComponent = () => {
  const { movies, setSearchResults } = useMovieContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = async () => {
    if (inputValue) {
      setSearchResults({
        results:
          [...movies].filter((e) =>
            e.title.toLowerCase().includes(inputValue.toLowerCase())
          ) || [],
        query: inputValue,
      });
    } else setSearchResults({ results: movies, query: "" });
  };

  return (
    <form className={"max-w-side-panel p-3"}>
      <input
        id="movie"
        autoFocus
        placeholder="Search by title..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className={
          "border border-slate-300 rounded-md py-1.5 px-2 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-light-blue focus:ring-1 focus:ring-light-blue"
        }
      />
      <div className={"mt-4"}>
        <button
          className={
            "border bg-light-blue text-white h-11 p-y-2 w-full rounded-full"
          }
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchPanel;
