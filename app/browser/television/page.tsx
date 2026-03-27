"use client";

import Header from "@/app/components/Header";
import TVMainContainer from "./TVMainContainer/TVMainContainer";
import { useTrendingTvShows } from "./hooks/useTrending";
import TVSecondaryConatiner from "./TVSecondaryContainer/TVSecondaryContainer";
import { usePopularTvShows } from "./hooks/usePopularTv";
import { useTopRatedTvShows } from "./hooks/useTopRatedTv";
import { useOnAirTvShows } from "./hooks/useOnAirTv";

export default function Television() {
  useTrendingTvShows();
  usePopularTvShows();
  useTopRatedTvShows();
  useOnAirTvShows();

  return (
    <div className="">
      <Header />
      <TVMainContainer />
      <TVSecondaryConatiner />
    </div>
  );
}
