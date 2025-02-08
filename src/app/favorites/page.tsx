"use client";
import { useCityStore } from "@/store/cityStore";
import React from "react";

const Favorites = () => {
  const { favoriteCities, toggleCity } = useCityStore();

  return (
    <div className="container">
      <h2>Favorites</h2>
      {favoriteCities.length === 0 ? (
        <p>You have not added any cities to your favourites yet.</p>
      ) : (
        <div className="row">
          {favoriteCities.map((city) => {
            if (!city || !city.main) {
              return null;
            }

            return (
              <div key={city.id} className="col-md-4 mb-4 d-flex">
                <div className="card p-3 d-flex align-items-center">
                  <h2>
                    {city.name}, {city.sys?.country}
                  </h2>
                  {city.weather?.[0]?.icon && (
                    <img
                      src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                      alt="Weather icon"
                      height={80}
                      width={80}
                    />
                  )}
                  <p>{city.main?.temp?.toFixed(1)}°C</p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => toggleCity(city)}
                  >
                    Удалить из избранного
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
