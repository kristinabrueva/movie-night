import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useMovieContext } from "../context/MovieContext";
import {
  sortAsc,
  sortDesc,
  sortPopularAsc,
  sortPopularDesc,
  sortTitleAsc,
  sortTitleDesc,
} from "../helpers/helpers";
import SelectItem from "./selectItem";

export const SortPanel: React.FunctionComponent = () => {
  const { setSearchResults, searchResults } = useMovieContext();

  const { results } = searchResults;

  const selectValues = [
    { value: "popularAsc", title: "Popular Ascending" },
    { value: "popularDesc", title: "Popular Descending" },
    { value: "ratingAsc", title: "Rating Ascending" },
    { value: "ratingDesc", title: "Rating Descending" },
    { value: "titleAsc", title: "Title (A-Z)" },
    { value: "titleDesc", title: "Title (Z-A)" },
  ];

  const handleSort = (value: string) => {
    switch (value) {
      case "popularAsc":
        setSearchResults(sortPopularAsc(results));
        break;
      case "popularDesc":
        setSearchResults(sortPopularDesc(results));
        break;
      case "ratingAsc":
        setSearchResults(sortAsc(results));
        break;
      case "ratingDesc":
        setSearchResults(sortDesc(results));
        break;
      case "titleAsc":
        setSearchResults(sortTitleAsc(results));
        break;
      case "titleDesc":
        setSearchResults(sortTitleDesc(results));
        break;
      default:
        setSearchResults(sortPopularDesc(results));
    }
  };

  return (
    <>
      <div
        className={
          "font-extralight text-black py-2 border border-b-0 border-x-0 border-slate-300"
        }
      >
        Sort Results By
      </div>
      <Select.Root
        defaultValue="titleAsc"
        onValueChange={(e) => {
          handleSort(e);
        }}
      >
        <Select.Trigger
          aria-label="Sort"
          className={
            "group flex space-x-0 bg-slate-100 text-xs w-full h-5 p-4 border border-slate-300 rounded-md relative items-center"
          }
        >
          <span className={"flex w-full"}>
            <Select.Value />
          </span>
          <ChevronRightIcon
            className={
              "group-data-state-open:rotate-90 radix-state-open:duration-300"
            }
          />
        </Select.Trigger>

        <Select.Portal
          className={"bg-white border border-slate-300 rounded-md relative"}
        >
          <Select.Content className={"absolute inset-x-0 -bottom-20 z-30"}>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {selectValues.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  title={item.title}
                />
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

export default SortPanel;
