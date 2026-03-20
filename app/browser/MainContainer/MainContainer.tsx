import { useAppSelector } from "@/lib/hooks";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const nowPlayingMovies = useAppSelector(
    (store) => store?.movie?.nowPlayingMovies
  );

  if (!nowPlayingMovies || nowPlayingMovies?.length === 0) {
    return null;
  }

  const mainMovie = nowPlayingMovies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}
