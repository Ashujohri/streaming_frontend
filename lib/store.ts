import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/app/features/auth/authSlice";
import movieReducer from "@/app/features/movie/movieSlice";
import trailerReducer from "@/app/features/trailer/trailerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      movie: movieReducer,
      trailer: trailerReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` type from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
