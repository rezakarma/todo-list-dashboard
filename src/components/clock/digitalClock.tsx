"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
interface DigitalClockProps {
  initialTime?: string; // Optional prop for the initial time
}

const DigitalClock: React.FC<DigitalClockProps> = ({ initialTime }) => {
  const [time, setTime] = useState(() => {
    return initialTime ? new Date(initialTime) : new Date();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Card className=" h-full w-1/2 p-8 flex justify-center items-center group hover:bg-primary transition-all duration-300 ease-in-out">
      <CardContent className="pt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary group-hover:text-secondary transition-all duration-300 ease-in-out">
            {formatTime(time)}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default DigitalClock;
