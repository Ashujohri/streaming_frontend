"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { API_OPTION } from "@/app/Constant";
import {
  addPopularTvShows,
} from "@/app/features/television/tvSlice";

export const usePopularTvShows = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPopularTvShows();
  }, []);

  const getPopularTvShows = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=true&language=en-US&page=1&sort_by=popularity.desc",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addPopularTvShows(data?.results));
    } catch (error) {
      console.error("Popular Tv Shows API Error: ", error);
    }
  };
};
