"use client";
import { useTranslations } from "next-intl";
import ChartContainer from "../chart/chartContainer";
import WeatherCard from "./weatherCard";
import { useAppSelector } from "@/hooks/useRedux";

const WeatherContainer = () => {
  const t = useTranslations("weather");
  const currentWeather = useAppSelector(
    (state) => state.weather.weather?.current
  );
  return (
    <div className="flex flex-col w-1/2 h-full gap-5 justify-center items-center">
      <ChartContainer />
      <WeatherCard
        description={t("currenWeatherDescription")}
        title={t("currentWeather")}
        humidity={currentWeather?.relative_humidity_2m.toString() || "0"}
        temperature={currentWeather?.temperature_2m.toString() || "0"}
      />
    </div>
  );
};

export default WeatherContainer;
