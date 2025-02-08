"use client";
import SearchBar from "@/components/SearchBar/SearchBar";
import WeatherCard from "@/components/WeatherCard/WeatherCard";
import { fetchWeather } from "@/lib/fetchWeather";
import React, { useEffect, useState } from "react";
import "../styles/globals.scss";
import useWeatherStore from "@/store/weatherStore";

export default function Home() {
  const { city, setWeatherData } = useWeatherStore();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    setError(null);

    fetchWeather(city)
      .then((data) => {
        if (data) {
          setWeatherData(data);
        } else {
          setError("City not found. Please try again.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch weather data. Please check the city name.");
        console.error("Fetch error:", err);
      });
  }, [city]);

  return (
    <div className="w-full d-flex flex-column min-vh-100 p-3">
      <SearchBar />
      {error ? (
        <div className="alert alert-danger">
          <p>{error}</p>
        </div>
      ) : (
        <WeatherCard />
      )}
    </div>
  );
}
