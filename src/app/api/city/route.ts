import { NextResponse } from "next/server";
import cities from "@/data/cities.json";
export const GET = async () => {
  try {
    // const uniqueCities = Array.from(
    //   new Map(cities.map((city) => [city.city, city])).values()
    // );
    return NextResponse.json(cities);
  } catch {
    return NextResponse.json({ error: "something wrong!" });
  }
};
