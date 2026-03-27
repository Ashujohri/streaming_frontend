import { useAppSelector } from "@/lib/hooks";
import TvShowList from "./TvShowsList/TvShowList";
import { useRecommendation } from "../../hooks/useRecommendationMovies";

export default function TVSecondaryConatiner() {
  const tvShows = useAppSelector((store) => store?.television);
  const tvId = useAppSelector(
    (store) => store?.television?.trendingTelevision[0]?.id
  );
  const { data: recData } = useRecommendation(tvId, "tv");

  return (
    <div className="bg-black relative z-20 -mt-32 space-y-10 pb-20">
      <TvShowList title="Recommended Tv Shows" tvShow={recData} />
      <TvShowList
        title="Trending Tv Shows"
        tvShow={tvShows?.trendingTelevision}
      />
      <TvShowList
        title="On-Air Tv Shows"
        tvShow={tvShows?.trendingTelevision}
      />
      <TvShowList
        title="Top Rated Tv Shows"
        tvShow={tvShows?.topRatedTelevision}
      />
      <TvShowList
        title="Popular Tv Shows"
        tvShow={tvShows?.trendingTelevision}
      />
    </div>
  );
}
