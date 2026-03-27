"use client";
import Header from "../components/Header";
import { useNowPlayingMovies } from "./hooks/useNowPlayingMovies";
import { usePopularMovies } from "./hooks/usePopularMovies";
import { useTopRatedMovies } from "./hooks/useTopRatedMovies";
import { useUpcomingMovies } from "./hooks/useUpComingMovies";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryConatiner from "./SecondaryContainer/SecondaryContainer";
import { useOnAirTvShows } from "./television/hooks/useOnAirTv";
import { usePopularTvShows } from "./television/hooks/usePopularTv";
import { useTopRatedTvShows } from "./television/hooks/useTopRatedTv";
import { useTrendingTvShows } from "./television/hooks/useTrending";
import TVSecondaryConatiner from "./television/TVSecondaryContainer/TVSecondaryContainer";

export default function Browser() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingTvShows();
  usePopularTvShows();
  useTopRatedTvShows();
  useOnAirTvShows();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryConatiner />
      <TVSecondaryConatiner />
    </div>
  );
}
