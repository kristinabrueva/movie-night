import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { formatDate } from "../helpers/helpers";

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
    <div
      style={{
        maxHeight: "100%",
        width: "150px",
        position: "relative",
        paddingBottom: "15px",
        borderRadius: "15px",
        overflow: "hidden",

        boxShadow: "5px 5px 10px lightgrey",
      }}
    >
      <AspectRatio.Root ratio={9 / 12}>
        <Image
          fill
          src={`${process.env.NEXT_PUBLIC_MOVIE_API_IMAGES_URL}${poster_path}`}
          alt={`${title} poster`}
        />
      </AspectRatio.Root>
      {/* <div>{vote_average}</div> */}
      <div
        style={{
          padding: "10px",
          paddingTop: "30px",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: "600" }}>{title}</div>
        <div style={{ fontWeight: "200", color: "gray" }}>
          {formatDate(release_date)}
        </div>
      </div>
    </div>
  );
};

export default Movie;
