import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

interface MovieProps {
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export const Movie: React.FunctionComponent<MovieProps> = ({
  title,
  vote_average,
  release_date,
  poster_path,
}) => {
  return (
    <div>
      <AspectRatio.Root ratio={9 / 9}>
        <img
          src={`${process.env.NEXT_PUBLIC_MOVIE_API_IMAGES_URL}${poster_path}`}
          alt={`${title} poster`}
        />
      </AspectRatio.Root>
      <div>{title}</div>
      <div>{vote_average}</div>
      <div>{release_date}</div>
    </div>
  );
};

export default Movie;
