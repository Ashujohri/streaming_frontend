import { useAppSelector } from "@/lib/hooks";
import VideoBackground from "../../MainContainer/VideoBackground";
import VideoTitle from "../../MainContainer/VideoTitle";
import { MEDIA_TYPE } from "@/app/Constant";

export default function TVMainContainer() {
  const trendingTvShows = useAppSelector(
    (store) => store?.television?.trendingTelevision
  );

  if (!trendingTvShows || trendingTvShows?.length === 0) {
    return null;
  }

  const mainMovie = trendingTvShows[0];
  const { name, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <VideoBackground movieId={id} type={MEDIA_TYPE.TELEVISION as any} />
      <VideoTitle title={name} overview={overview} />
    </div>
  );
}
