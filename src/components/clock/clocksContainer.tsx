"use client";
import { Card, CardContent } from "@/components/ui/card";
import AnalogClock from "./analogClock";
import DigitalClock from "./digitalClock";
import Greeting from "../dashboard/greeting";
import Chart from "../chart/chart";
import { useAppSelector } from "@/hooks/useRedux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const ClocksContainer = () => {
  // const currentTime = useAppSelector(
  //   (state) => state.weather?.weather?.current?.time || null
  // );

  const currentTime = new Date().toISOString();
  return (
    <div className="flex flex-col gap-5 w-1/2 h-full">
      {currentTime && (
        <div className="flex gap-5 h-1/2  w-full">
          <AnalogClock initialTime={currentTime} />
          <DigitalClock initialTime={currentTime} />
        </div>
      )}
      <Greeting time="2024-11-05T22:30" />
    </div>
  );
};

export default ClocksContainer;
