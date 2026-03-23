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

interface PopularMovie {
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

interface TopRatedMovie {
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

interface UpComingMovie {
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
  popularMovies: PopularMovie[];
  topRatedMovies: TopRatedMovie[];
  upComingMovies: UpComingMovie[];
}

const initialState: MovieState = {
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
};

const movieSlice = createSlice({
  name: "nowPlayingMovies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<NowPlayingMovie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<PopularMovie[]>) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action: PayloadAction<TopRatedMovie[]>) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action: PayloadAction<UpComingMovie[]>) => {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
