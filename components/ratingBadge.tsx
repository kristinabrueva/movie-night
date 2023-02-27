import clsx from "clsx";
import React from "react";

export const RatingBadge: React.FunctionComponent<{
  rating: number;
}> = ({ rating }) => {
  const ratingToPerc = rating ? Math.round(rating * 10).toString() + "%" : "NR";

  const borderColor = () => {
    if (rating >= 8) return "border-green-400";
    else if (rating >= 6) return "border-yellow-400";
    else return "border-red-400";
  };

  return (
    <div
      className={clsx(
        "text-xs w-10 h-10 rounded-full leading-10 bg-black text-white border-re absolute left-2 -bottom-5 border text-center",
        `${borderColor()} `
      )}
    >
      {ratingToPerc}
    </div>
  );
};

export default RatingBadge;
