import { loadSettingsFromLocalStorage } from "@/lib/localStorage";
import { city } from "@/types/settings.types";
import { SettingStateType } from "@/types/store.types";
import { createSlice } from "@reduxjs/toolkit";
const currentCity = loadSettingsFromLocalStorage("city") as city;
const initialState: SettingStateType = {
  name: loadSettingsFromLocalStorage("name") as string | null,
  city: currentCity
    ? currentCity
    : {
        city: "Tehran",
        lat: "35.7000",
        lng: "51.4167",
        country: "Iran",
        iso2: "IR",
        admin_name: "Tehrān",
        capital: "primary",
        population: "13633000",
        population_proper: "9033003",
      },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    loadSetting: (state) => {
      state.name = loadSettingsFromLocalStorage("name") as string | null;
      state.city = loadSettingsFromLocalStorage("city") as city;
    },
    getName: (state) => {
      state.name = loadSettingsFromLocalStorage("name") as string | null;
    },
    getCity: (state) => {
      state.city = loadSettingsFromLocalStorage("city") as city;
    },
  },
});

export default settingsSlice;
export const settingSliceAction = settingsSlice.actions;
