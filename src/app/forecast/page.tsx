"use client";
import WeatherCard from "@/components/WeatherCard/WeatherCard";
import { fetchForecastWeather } from "@/lib/fetchWeather";
import useWeatherStore from "@/store/weatherStore";
import React, { useEffect, useState } from "react";
import styles from "./Forecast.module.scss";
import ForecastCard from "@/components/ForecastCard/ForecastCard";
import { WeatherType } from "@/lib/types";

const Forecast = () => {
  const { city } = useWeatherStore();
  const [data, setData] = useState<WeatherType>();

  useEffect(() => {
    fetchForecastWeather(city)
      .then((forecast) => {
        setData(forecast!);
        console.log(forecast?.list);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div>
      <WeatherCard />
      <div
        className={`${styles.container} container d-flex justify-content-between`}
      >
        {data?.list
          .filter((_, index) => index % 8 === 0)
          .map((card) => (
            <ForecastCard key={card.dt} card={card} />
          ))}
      </div>
    </div>
  );
};

export default Forecast;
