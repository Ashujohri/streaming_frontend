"use client";
import { useEffect } from "react";
import { API_OPTION } from "../../Constant";
import { useAppDispatch } from "@/lib/hooks";
import { addTopRatedMovies } from "@/app/features/movie/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data?.results));
    } catch (error) {
      console.error("Top Rated Movie API Error: ", error);
    }
  };
};
