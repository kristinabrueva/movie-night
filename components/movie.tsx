import React, { useState } from "react";
import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import * as Dialog from "@radix-ui/react-dialog";

import { MovieType } from "../types";
import { formatDate } from "../helpers/helpers";
import RatingBadge from "./ratingBadge";
import MovieModal from "./movieModal";

export const Movie: React.FunctionComponent<{
  movie: MovieType;
}> = ({ movie }) => {
  const { title, poster_path, vote_average, release_date } = movie;
  const [open, setOpen] = useState(false);
  const poster = poster_path
    ? `${process.env.NEXT_PUBLIC_MOVIE_API_IMAGES_URL}${poster_path}`
    : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="max-h-full w-32 sm:w-44 static pb-4 overflow-hidden rounded-2xl shadow">
          <div className="relative">
            <AspectRatio.Root ratio={9 / 12}>
              <Image fill src={poster} alt={`${title} poster`} />
            </AspectRatio.Root>
            <RatingBadge rating={vote_average} />
          </div>
          <div className="px-3 pb-3 pt-6 flex gap-0 flex-col">
            <h2 className="font-semibold text-base">{title}</h2>
            <div
              className=" font-light text-sm text-gray-400"
              style={{ fontWeight: "200", color: "gray" }}
            >
              {formatDate(release_date)}
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <MovieModal movie={movie} />
    </Dialog.Root>
  );
};

export default Movie;
