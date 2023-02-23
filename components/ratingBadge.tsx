import React from "react";

export const RatingBadge: React.FunctionComponent<{
  rating: number;
}> = ({ rating }) => {
  const ratingToPerc = rating ? Math.round(rating * 10).toString() + "%" : "NR";
  return (
    <div className="text-xs w-10 h-10 rounded-full leading-10 bg-black text-white absolute left-2 -bottom-5 border-yellow-400 border text-center">
      {ratingToPerc}
    </div>
  );
};

export default RatingBadge;
