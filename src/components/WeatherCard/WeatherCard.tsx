import React from "react";
import styles from "./WeatherCard.module.scss";
import { formatDate } from "@/lib/formatDate";
import Link from "next/link";
import { useCityStore } from "@/store/cityStore";
import useWeatherStore from "@/store/weatherStore";

const WeatherCard = () => {
  const { weatherData } = useWeatherStore();
  const { toggleCity, favoriteCities } = useCityStore();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  console.log(favoriteCities);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mb-5">
      <div className={`${styles.card} d-flex justify-content-between`}>
        <Link href={"/forecast"} className="text-decoration-none text-dark">
          <div>
            <h2 className={styles.city}>
              {weatherData?.name}, {weatherData?.sys.country}
            </h2>
            <p>{formatDate(weatherData.dt, weatherData.timezone)}</p>
            <div className="d-flex align-items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather icon"
                width={80}
                height={80}
              />
              <p className={`${styles.temp}`}>
                {Math.floor(weatherData.main.temp)}°
                <span className={`${styles.celsius}`}>C</span>
              </p>
            </div>
            <p>{weatherData.weather[0].main}</p>
          </div>
        </Link>
        <div className="d-flex flex-column align-items-center">
          <p>Wind: {weatherData.wind.speed} km/h</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Feels like: {Math.floor(weatherData.main.feels_like)}°C</p>
          <button
            className="border-0 bg-transparent p-0"
            onClick={() => toggleCity(weatherData)}
          >
            {favoriteCities.some((city) => city.id === weatherData.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart-fill mt-4"
                viewBox="0 0 16 16"
              >
                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart mt-4"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
