import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

import SearchPanel from "./searchPanel";
import SortPanel from "./sortPanel";
import SidePanelItem from "./sidePanelItem";

export const SidePanel: React.FunctionComponent = () => {
  return (
    <Accordion.Root type="multiple" className={"w-side-panel p-3 mt-10"}>
      <SidePanelItem title="Sort">
        <SortPanel />
      </SidePanelItem>
      <SidePanelItem title="Search">
        <SearchPanel />
      </SidePanelItem>
    </Accordion.Root>
  );
};

export default SidePanel;
