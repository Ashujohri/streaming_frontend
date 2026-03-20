"use client";
import { useEffect } from "react";
import { API_OPTION } from "../../Constant";
import { useAppDispatch } from "@/lib/hooks";
import { addNowPlayingMovies } from "@/app/features/movie/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?include_adult=true&include_video=true&language=en-US&page=1",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data?.results));
    } catch (error) {
      console.error("Now Playing Movie API Error: ", error);
    }
  };
};
