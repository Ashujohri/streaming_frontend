import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NowPlayingMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieState {
  nowPlayingMovies: NowPlayingMovie[];
}

const initialState: MovieState = {
  nowPlayingMovies: [],
};

const movieSlice = createSlice({
  name: "nowPlayingMovies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<NowPlayingMovie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
