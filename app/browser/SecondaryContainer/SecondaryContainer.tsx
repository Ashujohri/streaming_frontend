import { useAppSelector } from "@/lib/hooks";
import MovieList from "./MoviesList/MovieList";

export default function SecondaryConatiner() {
  const movies = useAppSelector((store) => store?.movie);

  return (
    <div className="bg-black relative z-20 -mt-40 space-y-10 pb-20">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Upcoming Movies" movies={movies?.upComingMovies} />
      <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
      <MovieList title="Popular Movies" movies={movies?.popularMovies} />
    </div>
  );
}

/**
 * MovieList Popular
 * MovieList Now Playing
 * MovieList Trending
 * MovieList Horror
 */
