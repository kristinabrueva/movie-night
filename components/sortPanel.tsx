import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Select from "@radix-ui/react-select";
import { clsx } from "clsx";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useMovieContext } from "../context/MovieContext";
import {
  sortAsc,
  sortDesc,
  sortPopularAsc,
  sortPopularDesc,
  sortTitleAsc,
  sortTitleDesc,
} from "../helpers/helpers";

const PanelItem: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <Accordion.Trigger className={clsx("group flex font-semibold space-x-0")}>
      <span className={clsx("flex w-full")}>{title}</span>
      <ChevronRightIcon
        className={clsx(
          "group-data-state-open:rotate-90 radix-state-open:duration-300"
        )}
      />
    </Accordion.Trigger>
  );
};

const SelectItem: React.FunctionComponent<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <Select.Item
    value={value}
    className={clsx("text-xs hover:cursor-pointer hover:bg-slate-300 p-2 pl-4")}
  >
    <Select.ItemText>{title}</Select.ItemText>
    <Select.ItemIndicator />
  </Select.Item>
);

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
        className={clsx(
          "font-light text-base border border-b-0 border-x-0 border-slate-300"
        )}
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
          className={clsx(
            "flex space-x-0 bg-slate-300 text-xs w-full h-5 p-4 border border-slate-300 rounded-md relative"
          )}
        >
          <Select.Value
            className={clsx("flex w-full font-semibold align-baseline ")}
          />
          <ChevronDownIcon />
        </Select.Trigger>

        <Select.Portal
          className={clsx(
            "bg-white border border-slate-300 rounded-md relative "
          )}
        >
          <Select.Content className={clsx("absolute inset-x-0 -bottom-20")}>
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
