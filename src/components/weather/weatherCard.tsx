"use client";
import { Droplet, Thermometer } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { WeatherCardType } from "@/types/weather.types";

const WeatherCard = ({
  title,
  description,
  humidity,
  temperature,
}: WeatherCardType) => {
  return (
    <Card className="w-full h-1/2 group hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="text-primary group-hover:text-secondary transition-all duration-300 ease-in-out">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gp-5">
          <div className="flex justify-center items-center">
            <Thermometer className="h-16 w-16 text-orange-400" />
            <h1 className="text-7xl font-extrabold">{`${temperature}°`}</h1>
          </div>
          <div className="flex justify-center items-center">
            <Droplet className="h-16 w-16 text-blue-500" />
            <h1 className="text-7xl font-extrabold">{`${humidity}%`}</h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
