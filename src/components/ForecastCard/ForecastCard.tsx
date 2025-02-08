import React from "react";
import styles from "../../app/forecast/Forecast.module.scss";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

interface ForecastCardProps {
  card: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
      main: string;
    }[];
    dt_txt: string;
  };
}

const ForecastCard = ({ card }: ForecastCardProps) => {
  return (
    <div
      key={card.dt}
      className={`${styles.card} d-flex flex-column align-items-center justify-content-center p-2`}
    >
      <p>{formatDate(card.dt_txt)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
        alt="Weather icon"
        width={40}
        height={40}
      />
      <p>{Math.floor(card.main.temp)}°С</p>
      <p>{card.weather[0].main}</p>
    </div>
  );
};

export default ForecastCard;
