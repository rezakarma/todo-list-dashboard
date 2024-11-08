"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Card, CardContent } from "../ui/card";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//   },
//   mobile: {
//     label: "Mobile",
//   },
// } satisfies ChartConfig;

type ChartProps = {
  chartConfig: ChartConfig;
  chartData: { date: string; value: number }[];
  type: "reverse" | "non-reverse";
};

const Chart = ({ chartConfig, chartData, type }: ChartProps) => {
  const modifiedChartData = chartData.map((item) => ({
    date: item.date,
    value: -item.value, // Negate the value
  }));

  return (
   
        <ChartContainer
          config={chartConfig}
          className="min-h-[5px] w-full max-h-1/2"
        >
          <BarChart
            accessibilityLayer
            data={type === "reverse" ? modifiedChartData : chartData}
          >
            <ChartTooltip content={<ChartTooltipContent />} />
            {Object.keys(chartConfig).map((item, i) => {
              return (
                <Bar
                  key={i}
                  dataKey={item}
                  className={
                    type === "reverse" ? "fill-primary/55" : "fill-primary"
                  }
                  radius={ [5, 5, 4, 4] }
                />
              );
            })}
          </BarChart>
        </ChartContainer>
  );
};

export default Chart;
