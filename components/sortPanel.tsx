import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Select from "@radix-ui/react-select";
import { clsx } from "clsx";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import SearchPanel from "./searchPanel";

const PanelItem: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <Accordion.Trigger
      className={clsx(
        "group flex font-semibold space-x-0"
        // "data-state-open:bg-black group-radix-state-open:duration-300"
      )}
    >
      <span className={clsx("flex w-full")}>{title}</span>{" "}
      <ChevronRightIcon
        className={clsx(
          "group-data-state-open:rotate-90 radix-state-open:duration-300"
        )}
      />
    </Accordion.Trigger>
  );
};

export const SortPanel: React.FunctionComponent = () => {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className={clsx("w-side-panel p-3")}
    >
      <Accordion.Item
        value="item-1"
        className={clsx(
          "flex flex-col gap-2 max-w-side-panel p-3 mb-4 shadow-block border rounded-md"
        )}
      >
        <PanelItem title="Sort" />
        <Accordion.Content>
          <div className={clsx("font-light text-base")}> Sort Results By</div>
          <Select.Root>
            <Select.Trigger>
              <Select.Value />
              <ChevronDownIcon />
            </Select.Trigger>

            <Select.Portal>
              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Item value="Popularity Descending">
                    <Select.ItemText>Popularity Descending</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="Popularity Ascending">
                    <Select.ItemText>Popularity Ascending</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>

                  <Select.Separator />
                </Select.Viewport>
                <Select.ScrollDownButton />
                <Select.Arrow />
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="item-2"
        className={clsx(
          "flex flex-col gap-2 max-w-side-panel p-3 mb-4 shadow-block border rounded-md"
        )}
      >
        <PanelItem title="Search" />
        <Accordion.Content>
          <SearchPanel />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SortPanel;
