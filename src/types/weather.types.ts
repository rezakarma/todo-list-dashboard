export type WeatherCardType = {
  title: string;
  description: string;
  humidity: string;
  temperature: string;
};

interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
}

interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
}

interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}
