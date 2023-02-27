import React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { formatDate, getMovieGenres } from "../helpers/helpers";
import { MovieType } from "../types";
import RatingBadge from "./ratingBadge";
import Tag from "./tag";

export const MovieModal: React.FunctionComponent<{
  movie: MovieType;
}> = ({ movie }) => {
  const {
    title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    overview,
    genre_ids,
  } = movie;

  const poster = poster_path
    ? `${process.env.NEXT_PUBLIC_MOVIE_API_IMAGES_URL}${poster_path}`
    : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

  const backgroundImageUrl = backdrop_path
    ? `${process.env.NEXT_PUBLIC_MOVIE_API_BACKGROUND_IMAGES_URL}${backdrop_path}`
    : "";

  return (
    <Dialog.Portal className="min-h-screen">
      <Dialog.Overlay className={"bg-black bg-opacity-20 fixed inset-0 z-50"} />
      <Dialog.Content
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        className={`text-white fixed top-20 rounded-md m-6 left-3 w-fit bg-cover z-50`}
      >
        <div className="bg-black bg-opacity-70 sm:p-14 p-10 flex gap-10 z-50 h-fit">
          <div className="sm:flex min-w-[200px] hidden">
            <Image
              height={750}
              width={200}
              src={poster}
              alt={`${title} poster`}
            />
          </div>
          <div className="flex flex-col sm:gap-10 gap-3">
            <Dialog.Title className="sm:text-2xl text-lg font-semibold leading-relaxed">
              {title}
            </Dialog.Title>
            <div className="p-2 sm:pt-0 relative">
              <RatingBadge rating={vote_average} />
            </div>
            <div className="flex sm:gap-2 gap-1 sm:pt-0 pt-4 w-fit sm:text-xs text-black uppercase  overflow-hidden">
              {genre_ids &&
                getMovieGenres(genre_ids).map((i) => <Tag text={i} />)}
            </div>
            <Dialog.Description className="text-2xs leading-snug">
              {overview}
            </Dialog.Description>
            <div>{formatDate(release_date)}</div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default MovieModal;
