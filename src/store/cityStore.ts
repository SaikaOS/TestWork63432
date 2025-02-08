import { WeatherData } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CityStore {
  favoriteCities: WeatherData[];
  toggleCity: (cityWeather: WeatherData) => void;
}

export const useCityStore = create<CityStore>()(
  persist(
    (set, get) => ({
      favoriteCities: [],
      toggleCity: (cityWeather) => {
        const { favoriteCities } = get();
        const exists = favoriteCities.some(
          (city) => city.id === cityWeather.id
        );

        if (exists) {
          set({
            favoriteCities: favoriteCities.filter(
              (city) => city.id !== cityWeather.id
            ),
          });
        } else {
          set({
            favoriteCities: [...favoriteCities, cityWeather],
          });
        }
      },
    }),
    {
      name: "favorite-cities",
    }
  )
);
