"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { API_OPTION } from "@/app/Constant";
import {
  addPopularTvShows,
  addTopRatedTvShows,
} from "@/app/features/television/tvSlice";

export const useTopRatedTvShows = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTopRatedTvShows();
  }, []);

  const getTopRatedTvShows = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addTopRatedTvShows(data?.results));
    } catch (error) {
      console.error("Top Rated Tv Shows API Error: ", error);
    }
  };
};
