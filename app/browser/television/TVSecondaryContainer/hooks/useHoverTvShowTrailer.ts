import { API_OPTION } from "@/app/Constant";
import { useEffect, useState } from "react";

const trailerCache = new Map<number, string>();

export default function useHoverTvShowTrailer(
  tvShowId: number,
  enabled: boolean
) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !tvShowId) return;

    // Cache Trailer Condition
    if (trailerCache.has(tvShowId)) {
      setTrailerKey(trailerCache.get(tvShowId)!);
      return;
    }

    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${tvShowId}/videos`,
          API_OPTION
        );
        const data = await response.json();

        const trailer =
          data.results?.find(
            (v: any) => v.type === "Trailer" && v.site === "YouTube"
          ) || data.results?.[0];

        const key = trailer?.key ?? null;

        // Caching store
        if (key) trailerCache.set(tvShowId, key);

        setTrailerKey(key);
      } catch (e) {
        console.error("Trailer error", e);
      }
    };

    fetchTrailer();
  }, [tvShowId, enabled]);

  return trailerKey;
}
