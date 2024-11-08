export const fetchCities = async () => {
  const result = await fetch("/api/city");
  if (!result.ok) {
    throw new Error("Network response was not ok");
  }
  const response = await result.json();
  if (response.error) {
    throw new Error(response.error);
  }

  return response;
};

export const fetchWeatherData = async (lat: string, lng: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_ENDPOINT}/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m&hourly=temperature_2m,relative_humidity_2m&forecast_days=1`
  );
  if (!result.ok) {
    throw new Error("Network response was not ok");
  }
  const response = await result.json();
  if (!response.current) {
    throw new Error("something goes wrong!");
  }
  return response;
};
