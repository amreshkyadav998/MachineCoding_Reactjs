import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState(""); // User input city
  const [weather, setWeather] = useState(null); // API data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const API_KEY = "f7c80648602d9c525da8bf5f1a1205fd"; // Get from https://openweathermap.org/api

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
