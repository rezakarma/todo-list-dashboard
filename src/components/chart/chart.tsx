"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
type ChartProps = {
  chartConfig: ChartConfig;
  chartData: { date: string; value: number }[];
  type: "reverse" | "non-reverse";
};

const Chart = ({ chartConfig, chartData, type }: ChartProps) => {
  const modifiedChartData = chartData.map((item) => ({
    date: item.date,
    value: -item.value,
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
