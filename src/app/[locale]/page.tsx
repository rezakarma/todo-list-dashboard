"use client";
import AnalogClock from "@/components/clock/analogClock";
import ClocksContainer from "@/components/clock/clocksContainer";
import DigitalClock from "@/components/clock/digitalClock";
import Chart from "@/components/dashboard/chart";
import InfoCardContainer from "@/components/dashboard/infoCardContainer";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";
import Greeting from "@/components/dashboard/greeting";
export default function Home() {
  const t = useTranslations("default");
  return (
      <div className="w-full flex flex-col gap-5 px-10 justify-center items-center">
        <InfoCardContainer />
        <div className="flex flex-row w-full gap-5">
        <ClocksContainer />
        <Chart />
        </div>
      </div>
  );
}
