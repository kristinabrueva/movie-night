import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const SidePanelItem: React.FunctionComponent<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <Accordion.Item
      value={title}
      className={
        "flex flex-col gap-2 max-w-side-panel p-3 mb-4 shadow-block border rounded-md"
      }
    >
      <Accordion.Trigger className={"group flex font-semibold space-x-0"}>
        <span className={"flex w-full"}>{title}</span>
        <ChevronRightIcon
          className={
            "group-data-state-open:rotate-90 radix-state-open:duration-300"
          }
        />
      </Accordion.Trigger>
      <Accordion.Content>{children}</Accordion.Content>
    </Accordion.Item>
  );
};

export default SidePanelItem;
