"use client";
import AnalogClock from "./analogClock";
import DigitalClock from "./digitalClock";
import Greeting from "../dashboard/greeting";

const ClocksContainer = () => {

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
