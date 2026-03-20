import { useAppSelector } from "@/lib/hooks";
import MovieList from "./MoviesList/MovieList";

export default function SecondaryConatiner() {
  const movies = useAppSelector((store) => store?.movie);

  return (
    <div className="bg-black relative z-20 -mt-40 space-y-10 pb-20">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
    </div>
  );
}

/**
 * MovieList Popular
 * MovieList Now Playing
 * MovieList Trending
 * MovieList Horror
 */
