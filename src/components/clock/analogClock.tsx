"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
interface AnalogClockProps {
  initialTime?: string; // Optional prop for the initial time
}

const AnalogClock: React.FC<AnalogClockProps> = ({ initialTime }) => {
  // Initialize time state with either the parsed initial time or the current time
  const [time, setTime] = useState(() => {
    return initialTime ? new Date(initialTime) : new Date();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000)); // Increment by 1 second
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees =
    (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;
  const hoursDegrees =
    (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30;

  return (
    <Card className="group hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out w-1/2 h-full flex justify-center items-center ">
      <CardContent className="!pt-6">
        <div className="relative w-full h-full border-4 border-primary rounded-full flex items-center justify-center group-hover:border-secondary transition-all duration-300 ease-in-out">
          {/* Hour Hand */}
          <div
            className="clock-hand hours text-primary bg-primary group-hover:bg-secondary transition-all duration-300 ease-in-out"
            style={{ transform: `rotate(${hoursDegrees}deg)` }}
          />
          {/* Minute Hand */}
          <div
            className="clock-hand minutes bg-primary group-hover:bg-secondary transition-all duration-300 ease-in-out"
            style={{ transform: `rotate(${minutesDegrees}deg)` }}
          />
          {/* Second Hand */}
          <div
            className="clock-hand seconds bg-primary group-hover:bg-secondary transition-all duration-300 ease-in-out"
            style={{ transform: `rotate(${secondsDegrees}deg)` }}
          />
          {/* Center Dot */}
          <div className="center-dot bg-primary group-hover:bg-secondary transition-all duration-300 ease-in-out" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalogClock;
