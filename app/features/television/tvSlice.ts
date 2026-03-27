import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrendingTeleVision {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

interface PopularTelevision {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface TopRatedTelevision {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface OnAirTelevision {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface TeleVisionState {
  trendingTelevision: TrendingTeleVision[];
  popularTelevision: PopularTelevision[];
  topRatedTelevision: TopRatedTelevision[];
  onAirTelevision: OnAirTelevision[];
}

const initialState: TeleVisionState = {
  trendingTelevision: [],
  popularTelevision: [],
  topRatedTelevision: [],
  onAirTelevision:[],
};

const TeleVisionSlice = createSlice({
  name: "trendingTelevision",
  initialState,
  reducers: {
    addTrendingTvShows: (
      state,
      action: PayloadAction<TrendingTeleVision[]>
    ) => {
      state.trendingTelevision = action.payload;
    },
    addPopularTvShows: (
      state,
      action: PayloadAction<TrendingTeleVision[]>
    ) => {
      state.popularTelevision = action.payload;
    },
    addTopRatedTvShows: (
      state,
      action: PayloadAction<TrendingTeleVision[]>
    ) => {
      state.topRatedTelevision = action.payload;
    },
    addOnAirTvShows: (
      state,
      action: PayloadAction<TrendingTeleVision[]>
    ) => {
      state.onAirTelevision = action.payload;
    },
  },
});

export const { addTrendingTvShows, addPopularTvShows, addTopRatedTvShows, addOnAirTvShows } = TeleVisionSlice.actions;
export default TeleVisionSlice.reducer;
