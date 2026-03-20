"use client";

import { useAppSelector } from "@/lib/hooks";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export default function VideoBackground({ movieId }: { movieId: number }) {
  useMovieTrailer(movieId);

  const trailerKey = useAppSelector((store) => store?.trailer?.trailerVideo);

  if (!trailerKey) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <iframe
        className="w-full h-full pointer-events-none scale-150"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&showinfo=0&modestbranding=1`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
}
