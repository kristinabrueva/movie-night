import React, { useState } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { formatDate } from "../helpers/helpers";
import RatingBadge from "./ratingBadge";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { MovieType } from "../pages";

export const Movie: React.FunctionComponent<{
  movie: MovieType;
}> = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const { title, poster_path, vote_average, release_date, overview } = movie;
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="max-h-full w-32 sm:w-44 relative pb-4 overflow-hidden rounded-2xl shadow">
          <div className="relative">
            <AspectRatio.Root ratio={9 / 12}>
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_MOVIE_API_IMAGES_URL}${poster_path}`}
                alt={`${title} poster`}
              />
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
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx("bg-black bg-opacity-20 fixed inset-0")}
        />
        <Dialog.Content
          className={clsx(
            "bg-white rounded-md fixed top-1/4 left-3 w-fit overflow-scroll p-7"
          )}
        >
          <AspectRatio.Root ratio={9 / 12}>
            <Image
              width={50}
              height={50}
              src={`${process.env.NEXT_PUBLIC_MOVIE_API_IMAGES_URL}${poster_path}`}
              alt={`${title} poster`}
            />
          </AspectRatio.Root>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{overview}</Dialog.Description>
          <RatingBadge rating={vote_average} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Movie;
