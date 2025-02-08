"use client";
import useWeatherStore from "@/store/weatherStore";
import styles from "./SearchBar.module.scss";
import React, { useState } from "react";

export default function SearchBar() {
  const { setCity } = useWeatherStore();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue);
    }
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center mb-5"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a city..."
        className={`${styles.input}`}
      />
    </form>
  );
}
