"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchWeatherData } from "@/lib/fetchData";
import { weatherSliceAction } from "@/store/weather-slice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const WetherProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const city = useAppSelector((state) => state.settings.city);
  const { isPending, isError, data } = useQuery({
    queryKey: ["weather", city.lat, city.lng],
    queryFn: ({ queryKey }) => fetchWeatherData(queryKey[1], queryKey[2]),
  });

  useEffect(() => {
    if (data && !isError && !isPending) {
      dispatch(weatherSliceAction.setWeather(data));
    }
  }, [data]);
  return <div>{children}</div>;
};

export default WetherProvider;
