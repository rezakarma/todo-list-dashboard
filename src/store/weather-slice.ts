import { WeatherData } from "@/types/weather.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type instalState = {
  weather: WeatherData | null;
};

const initialState: instalState = {
  weather: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherData>) => {
      console.log(action.payload, " here");
      state.weather = action.payload;
    },
  },
});

export default weatherSlice;
export const weatherSliceAction = weatherSlice.actions;
