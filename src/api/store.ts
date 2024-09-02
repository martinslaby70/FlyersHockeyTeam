import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { stadiumApi } from "./stadiumApi";

export const store = configureStore({
  reducer: {
    [stadiumApi.reducerPath]: stadiumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stadiumApi.middleware),
});

setupListeners(store.dispatch);
