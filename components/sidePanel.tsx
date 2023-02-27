import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

import SearchPanel from "./searchPanel";
import SortPanel from "./sortPanel";
import SidePanelItem from "./sidePanelItem";

export const SidePanel: React.FunctionComponent = () => {
  return (
    <div className="bg-white z-10 min-w-min-side-panel h-fill sticky inset-0 p-3 flex justify-center">
      <Accordion.Root
        type="multiple"
        className={"w-side-panel  sm:static flex flex-col sm:gap-4 gap-2"}
      >
        <SidePanelItem title="Sort">
          <SortPanel />
        </SidePanelItem>
        <SidePanelItem title="Search">
          <SearchPanel />
        </SidePanelItem>
      </Accordion.Root>
    </div>
  );
};

export default SidePanel;
