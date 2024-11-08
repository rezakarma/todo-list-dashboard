"use client";
import ClocksContainer from "@/components/clock/clocksContainer";
import InfoCardContainer from "@/components/dashboard/infoCardContainer";
import { useTranslations } from "next-intl";
import WeatherContainer from "@/components/weather/weatherContainer";
import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient()

  queryClient.invalidateQueries({ queryKey: ['weather'] })
  return (
    <div className="w-full h-screen flex flex-col gap-5 px-10 justify-start items-center">
      <InfoCardContainer />
      <div className="flex flex-row w-full gap-5 h-[55%]">
        <ClocksContainer />
        <WeatherContainer />
      </div>
    </div>
  );
}
