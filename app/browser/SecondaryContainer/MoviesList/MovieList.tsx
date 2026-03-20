"use client";

import useMovieList from "../hooks/useMovieList";
import MovieCard from "./MovieCard";
import { useEffect, useRef, useState } from "react";

interface MovieListProps {
  title: string;
  movies: any[];
}

export default function MovieList({ title, movies }: MovieListProps) {
  const { rowRef, scroll, canScrollLeft, canScrollRight } = useMovieList();

  if (!movies) return null;

  return (
    <div className="px-6 relative overflow-visible">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`
          absolute left-0 top-0 bottom-0 w-20 z-40
          flex items-center justify-center
          transition-all
          ${
            canScrollLeft
              ? "opacity-100 hover:bg-black/40"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <span className="text-white text-5xl">❮</span>
      </button>

      {/* SLIDER */}
      <div
        ref={rowRef}
        className="flex gap-6 pointer-events-auto
          overflow-x-auto
          overflow-y-visible
          scroll-smooth
          scrollbar-hide 
          relative"
      >
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            posterPath={movie?.poster_path}
            backdropPath={movie?.backdrop_path}
            movieId={movie?.id}
          />
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`
          absolute right-0 top-0 bottom-0 w-20 z-40
          flex items-center justify-center
          transition-all
          ${
            canScrollRight
              ? "opacity-100 hover:bg-black/40"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <span className="text-white text-5xl">❯</span>
      </button>
    </div>
  );
}
