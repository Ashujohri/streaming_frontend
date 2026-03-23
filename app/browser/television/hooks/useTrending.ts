"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { API_OPTION } from "@/app/Constant";
import { addTrendingTvShows } from "@/app/features/television/tvSlice";

export const useTrendingTvShows = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTrendingTvShows();
  }, []);

  const getTrendingTvShows = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addTrendingTvShows(data?.results));
    } catch (error) {
      console.error("Trending Tv Shows API Error: ", error);
    }
  };
};
