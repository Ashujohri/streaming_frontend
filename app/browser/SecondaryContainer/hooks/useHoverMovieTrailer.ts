import { API_OPTION } from "@/app/Constant";
import { useEffect, useState } from "react";

export default function useHoverMovieTrailer(movieId: number, enabled: boolean) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !movieId) return;

    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTION
        );
        const data = await response.json();

        const trailer =
          data.results?.find(
            (v: any) => v.type === "Trailer" && v.site === "YouTube"
          ) || data.results?.[0];

        setTrailerKey(trailer?.key ?? null);
      } catch (e) {
        console.error("Trailer error", e);
      }
    };

    fetchTrailer();
  }, [movieId, enabled]);

  return trailerKey;
}
