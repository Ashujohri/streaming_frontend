import { useState } from "react";
import useHoverMovieTrailer from "../hooks/useHoverMovieTrailer";
import CircleBtn from "@/app/components/Button";
import { TMDB_ICONS } from "@/app/Constant";

export default function MovieCard({ posterPath, backdropPath, movieId }: any) {
  const [hover, setHover] = useState(false);

  const trailerKey = useHoverMovieTrailer(movieId, hover);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-[200px] flex-shrink-0"
    >
      {/* POSTER */}
      <img src={TMDB_ICONS.TMDB + posterPath} className="rounded-md" />

      {hover && (
        <div className="absolute top-0 left-0 w-[320px] z-[999]">
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl">
            {/* REAL TRAILER */}
            {trailerKey ? (
              <iframe
                className="w-full h-[180px]"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=0&loop=0&playlist=${trailerKey}`}
                allow="autoplay"
              />
            ) : (
              <img src={TMDB_ICONS.TMDB + backdropPath} />
            )}

            <div className="flex gap-3 p-3">
              <CircleBtn icon="▶" />
              <CircleBtn icon="+" />
              <CircleBtn icon="👍" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
