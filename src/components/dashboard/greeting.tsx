"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";

interface GreetingProps {
  time?: string; // Optional prop for the time
}

const Greeting: React.FC<GreetingProps> = ({ time }) => {
  // Function to determine the greeting message based on the provided time
  const getGreetingMessage = (date: Date): string => {
    const hours = date.getHours();
    if (hours < 5) {
      return "Good Early Morning! The world is quiet and peaceful.";
    } else if (hours < 12) {
      return "Good Morning! Rise and shine! Have a great day ahead!";
    } else if (hours === 12) {
      return "Good Noon! It's time for a well-deserved lunch break!";
    } else if (hours < 17) {
      return "Good Afternoon! Hope you're having a productive day!";
    } else if (hours < 21) {
      return "Good Evening! Time to relax and unwind after a long day!";
    } else {
      return "Good Late Night! It's time to wind down and get some rest.";
    }
  };

  // Function to provide additional suggestions based on the time of day
  const getSuggestion = (date: Date): string => {
    const hours = date.getHours();
    if (hours < 5) {
      return "Consider enjoying a warm drink and some quiet time.";
    } else if (hours < 12) {
      return "Don't forget to have a healthy breakfast!";
    } else if (hours === 12) {
      return "How about treating yourself to a nice lunch?";
    } else if (hours < 17) {
      return "How about grabbing some coffee or a snack?";
    } else if (hours < 21) {
      return "Maybe it's time for a nice dinner or some family time.";
    } else {
      return "Perhaps it's time for a good book or some relaxation.";
    }
  };

  // Parse the provided time or use the current time
  const currentTime = time ? new Date(time) : new Date();

  return (
    <Card className="w-fit flex justify-center items-center group hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out">
      <CardContent className="pt-8">
        <div className="text-center">
          <h1 className="text-2xl">
            {getGreetingMessage(currentTime)}
          </h1>
          <p className="text-lg">
            {getSuggestion(currentTime)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Greeting;
