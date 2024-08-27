"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: 10.8231, 
            longitude: 106.6297,
            current_weather: true 
          }
        });
        setWeatherData(response.data.current_weather);
      } catch (err) {
        setError("Không thể lấy dữ liệu thời tiết.");
        console.error("Error fetching weather data:", err);
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Thông tin thời tiết</h1>
      <p>Nhiệt độ: {weatherData.temperature}°C</p>
      <p>Tình trạng: {weatherData.weathercode}</p>
    </div>
  );
}
