"use client";
import Header from "../components/Header";
import { useNowPlayingMovies } from "./hooks/useNowPlayingMovies";
import { usePopularMovies } from "./hooks/usePopularMovies";
import { useTopRatedMovies } from "./hooks/useTopRatedMovies";
import { useUpcomingMovies } from "./hooks/useUpComingMovies";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryConatiner from "./SecondaryContainer/SecondaryContainer";

export default function Browser() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryConatiner />
    </div>
  );
}
