import CircleBtn from "@/app/components/Button";
import { TMDB_ICONS } from "@/app/Constant";
import { useHoverContext } from "@/app/browser/SecondaryContainer/context/HoverContext";
import useHoverIntent from "@/app/browser/SecondaryContainer/hooks/useHoverIntent";
import useHoverTvShowTrailer from "../hooks/useHoverTvShowTrailer";

export default function TvShowCard({ posterPath, backdropPath, tvShowId }: any) {
  const { activeId, setActiveId } = useHoverContext();
  const { hovered, onEnter, onLeave } = useHoverIntent(300);

  const isActive = activeId === tvShowId;

  const trailerKey = useHoverTvShowTrailer(tvShowId, isActive);

  const handleEnter = () => {
    onEnter();
    setActiveId(tvShowId);
  };

  const handleLeave = () => {
    onLeave();
    setActiveId(null);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative w-[200px] flex-shrink-0"
    >
      {/* POSTER */}
      <img src={TMDB_ICONS?.TMDB + posterPath} className="rounded-md" />

      {hovered && isActive && (
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
              <img src={TMDB_ICONS?.TMDB + backdropPath} />
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
