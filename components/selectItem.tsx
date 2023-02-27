import React from "react";
import * as Select from "@radix-ui/react-select";

const SelectItem: React.FunctionComponent<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <Select.Item
    value={value}
    className={"text-xs hover:cursor-pointer hover:bg-slate-300 p-2 pl-4"}
  >
    <Select.ItemText>{title}</Select.ItemText>
    <Select.ItemIndicator />
  </Select.Item>
);

export default SelectItem;
