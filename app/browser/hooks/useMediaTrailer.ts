"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { addTrailerVideo } from "@/app/features/trailer/trailerSlice";
import { API_OPTION } from "@/app/Constant";

export type MediaType = "movie" | "tv";

export const useMediaTrailer = (movieId: number, type: MediaType, enabled: boolean = true) => {
  const dispatch = useAppDispatch();

  if(!enabled || !movieId) return;

  const fetchTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}/videos`,
        API_OPTION
      );
      const data = await response.json();
      console.log({ data });

      const trailer = data?.results?.find(
        (video: any) => video?.type === "Trailer"
      );
      dispatch(addTrailerVideo(trailer?.key));
    } catch (error) {
      console.error("Now Playing Movie Trailer's API Error: ", error);
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, [movieId, type, enabled]);
};
