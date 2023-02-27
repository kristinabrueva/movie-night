import React from "react";

export const Tag: React.FunctionComponent<{
  text: string | undefined;
}> = ({ text }) => (
  <div className="bg-opacity-50 bg-white w-fit px-3 py-2 rounded-full">
    {text}
  </div>
);

export default Tag;
