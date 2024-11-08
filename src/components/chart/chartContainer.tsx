import { Card, CardContent } from "../ui/card";
import Chart from "./chart";
import { useAppSelector } from "@/hooks/useRedux";
import { useEffect, useState } from "react";
import { Droplet, Thermometer } from "lucide-react";

interface ChartData {
  date: string;
  value: number;
}
const chartData = [
  { date: "January", value: 0 },
  { date: "February", value: 0 },
  { date: "March", value: 0 },
  { date: "April", value: 0 },
  { date: "May", value: 0 },
  { date: "June", value: 0 },
  { date: "January", value: 0 },
  { date: "February", value: 0 },
  { date: "March", value: 0 },
  { date: "April", value: 0 },
  { date: "May", value: 0 },
  { date: "June", value: 0 },
  { date: "January", value: 0 },
  { date: "February", value: 0 },
  { date: "March", value: 0 },
  { date: "April", value: 0 },
  { date: "May", value: 0 },
  { date: "June", value: 0 },
];

const tempChartConfig = {
  value: {
    label: "Temp",
    icon: Thermometer,
  },
};

const humChartConfig = {
  value: {
    label: "hum",
    icon: Droplet
  },
};
const ChartContainer = () => {
  const [tempData, setTempData] = useState<ChartData[] | undefined>();
  const [humData, setHumData] = useState<ChartData[] | undefined>();
  const weatherHourly = useAppSelector(
    (state) => state.weather.weather?.hourly
  );
  useEffect(() => {
    if (weatherHourly) {
      const humidityArray = weatherHourly.time.map((time, index) => ({
        date: time,
        value: weatherHourly.relative_humidity_2m[index],
      }));

      setHumData(humidityArray);
      const temperatureArray = weatherHourly.time.map((time, index) => ({
        date: time,
        value: weatherHourly.temperature_2m[index],
      }));
      setTempData(temperatureArray);
    }
  }, [weatherHourly]);
  return (
    <Card className="h-1/2 w-full flex">
      <CardContent className="pt-0 pb-0 px-2 h-full w-full flex flex-col justify-center items-center">
        <Chart
          chartConfig={tempChartConfig}
          chartData={tempData || chartData}
          type="non-reverse"
        />
        <Chart
          chartConfig={humChartConfig}
          chartData={humData || chartData}
          type="reverse"
        />
      </CardContent>
    </Card>
  );
};

export default ChartContainer;
