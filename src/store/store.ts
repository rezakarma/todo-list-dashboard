import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./setting-slice";
import weatherSlice from "./weather-slice";
import todoSlice from "./todos-slice";

const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    weather: weatherSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
