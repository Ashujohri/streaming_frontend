"use client";
import { useEffect } from "react";
import { API_OPTION } from "../../Constant";
import { useAppDispatch } from "@/lib/hooks";
import { addPopularMovies } from "@/app/features/movie/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addPopularMovies(data?.results));
    } catch (error) {
      console.error("Popular Movie API Error: ", error);
    }
  };
};
