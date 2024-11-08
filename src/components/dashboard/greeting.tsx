"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

interface GreetingProps {
  time?: string; // Optional prop for the time
}

const Greeting: React.FC<GreetingProps> = ({ time }) => {
  const t = useTranslations("greeting");
  const getGreetingMessage = (date: Date): string => {
    const hours = date.getHours();
    if (hours < 5) {
      return t("goodErly");
    } else if (hours < 12) {
      return t("goodMorning");
    } else if (hours === 12) {
      return t("goodNoon");
    } else if (hours < 17) {
      return t("goodAfternoon");
    } else if (hours < 21) {
      return t("goodEvening");
    } else {
      return t("goodNight");
    }
  };

  // Function to provide additional suggestions based on the time of day
  const getSuggestion = (date: Date): string => {
    const hours = date.getHours();
    if (hours < 5) {
      return t("elryMessage");
    } else if (hours < 12) {
      return t("morningMessage");
    } else if (hours === 12) {
      return t("noonMessage");
    } else if (hours < 17) {
      return t("afternoonMessage");
    } else if (hours < 21) {
      return t("eveningMessage");
    } else {
      return t("nightMessage");
    }
  };

  // Parse the provided time or use the current time
  const currentTime = time ? new Date(time) : new Date();

  return (
    <Card className="w-full h-1/2 flex justify-center items-center group hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out text-primary">
      <CardContent className="pt-8">
        <div className="text-center  gorup-hover:!text-secondary">
          <h1 className="text-2xl">{getGreetingMessage(currentTime)}</h1>
          <p className="text-lg">{getSuggestion(currentTime)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Greeting;
