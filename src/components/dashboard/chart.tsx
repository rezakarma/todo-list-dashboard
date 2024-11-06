"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "../ui/chart";
import { Card, CardContent } from "../ui/card";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
const Chart = () => {
  return (
    <Card className="min-h-[10px] max-h-40 w-1/2 h-1/2">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-[10px] w-full max-h-40"
        >
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" className="fill-primary" radius={4} />
            <Bar dataKey="mobile" className="fill-primary/55" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
