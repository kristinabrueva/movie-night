import React from "react";

export const Tag: React.FunctionComponent<{
  text: string | undefined;
}> = ({ text }) => (
  <div
    key={text}
    className="bg-opacity-50 bg-white w-fit px-3 py-2 rounded-full self-center "
  >
    {text}
  </div>
);

export default Tag;
