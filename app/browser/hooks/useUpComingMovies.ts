"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { API_OPTION } from "@/app/Constant";
import { addUpComingMovies } from "@/app/features/movie/movieSlice";
import { getUpcomingDateRange } from "@/app/utils/date";

export const useUpcomingMovies = () => {
  const dispatch = useAppDispatch();

  const fetchUpcoming = async () => {
    try {
      const { minDate, maxDate } = getUpcomingDateRange(90);

      const url = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${minDate}&primary_release_date.lte=${maxDate}&sort_by=primary_release_date.asc&with_release_type=2|3&page=1`;

      const res = await fetch(url, API_OPTION);
      const data = await res?.json();

      dispatch(addUpComingMovies(data?.results));
    } catch (err) {
      console.error("Upcoming movies error:", err);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);
};
