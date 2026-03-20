import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrailerState {
  trailerVideo: string | null;
}

const initialState: TrailerState = {
  trailerVideo: null,
};

const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {
    addTrailerVideo: (state, action: PayloadAction<string>) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addTrailerVideo } = trailerSlice.actions;
export default trailerSlice.reducer;
