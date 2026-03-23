"use client";

import Header from "@/app/components/Header";
import TVMainContainer from "./TVMainContainer/TVMainContainer";
import { useTrendingTvShows } from "./hooks/useTrending";
import TVSecondaryConatiner from "./TVSecondaryContainer/TVSecondaryContainer";
import { usePopularTvShows } from "./hooks/usePopularTv";
import { useTopRatedTvShows } from "./hooks/useTopRatedTv";

export default function Television() {
  useTrendingTvShows();
  usePopularTvShows();
  useTopRatedTvShows();

  return (
    <div className="">
      <Header />
      <TVMainContainer />
      <TVSecondaryConatiner />
    </div>
  );
}
