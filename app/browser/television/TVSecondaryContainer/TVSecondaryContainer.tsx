import { useAppSelector } from "@/lib/hooks";
import TvShowList from "./TvShowsList/TvShowList";

export default function TVSecondaryConatiner() {
  const tvShows = useAppSelector((store) => store?.television);

  return (
    <div className="bg-black relative z-20 -mt-40 space-y-10 pb-20">
      <TvShowList
        title="Trending Tv Shows"
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
