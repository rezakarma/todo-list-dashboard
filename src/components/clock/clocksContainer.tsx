"use client";
import { Card, CardContent } from "@/components/ui/card";
import AnalogClock from "./analogClock";
import DigitalClock from "./digitalClock";
import Greeting from "../dashboard/greeting";
import Chart from "../dashboard/chart";
const ClocksContainer = () => {
  return (
    <div className="flex flex-col gap-5 w-1/2">
        <div className="flex gap-5">
      <AnalogClock initialTime="2024-11-05T22:30" />
      <DigitalClock initialTime="2024-11-05T22:30" />
        </div>
      <Greeting time="2024-11-05T03:30" />
    </div>
  );
};

export default ClocksContainer;
