"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { API_OPTION } from "@/app/Constant";
import { addOnAirTvShows } from "@/app/features/television/tvSlice";

export const useOnAirTvShows = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getOnAirTvShows();
  }, []);

  const getOnAirTvShows = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addOnAirTvShows(data?.results));
    } catch (error) {
      console.error("On Air Tv Shows API Error: ", error);
    }
  };
};
