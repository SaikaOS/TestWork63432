import { WeatherData } from "@/lib/types";
import { create } from "zustand";

type Store = {
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData) => void;
  city: string;
  setCity: (city: string) => void;
};

const useWeatherStore = create<Store>()((set) => ({
  weatherData: null,
  setWeatherData: (data) => set({ weatherData: data }),
  city: "Almaty",
  setCity: (inputCity) => set({ city: inputCity }),
}));

export default useWeatherStore;
