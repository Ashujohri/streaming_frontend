"use client";
import Header from "../components/Header";
import { useNowPlayingMovies } from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryConatiner from "./SecondaryContainer/SecondaryContainer";

export default function Browser() {
  useNowPlayingMovies();

  return (
    <div>
      <div className="">
        <Header />
        <MainContainer />
        <SecondaryConatiner />
      </div>
    </div>
  );
}
