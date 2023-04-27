import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { IWeatherData } from "../../Interfaces/Interfaces";
import { getLocationWeather } from "../../utils/getLocationWeather";
import { getWeather } from "../../utils/getWeather";
import "./Weather.css";

const localWeather = async (setData: Dispatch<SetStateAction<IWeatherData>>) =>
  await getLocationWeather(setData);
const Weather = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData>({
    weatherConditionImageUrl: "",
    temperature: "",
    city: "",
  });

  useEffect(() => {
    localWeather(setWeatherData);
  }, []);

  return (
    <React.Fragment>
      <div className="weather-container">
        <img
          className="weather-container__image"
          src={weatherData.weatherConditionImageUrl}
          alt="weather condition icon"
        />
        <span className="weather-container__temp">
          {weatherData.temperature}
        </span>
        <span className="weather-container__city">{weatherData.city}</span>
      </div>
    </React.Fragment>
  );
};

export default Weather;
