import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { IWeatherData } from "../../../Interfaces/Interfaces";
import { getLocationWeather } from "../../utils/getLocationWeather";

import "./Weather.css";
import loader from "../../../assets/circular_progress_indicator.gif";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData>({
    weatherConditionImageUrl: "",
    temperature: "",
    city: "",
    showLoader: true,
  });

  const localWeather = async (
    setData: Dispatch<SetStateAction<IWeatherData>>
  ) => {
    await getLocationWeather(setData);
  };

  useEffect(() => {
    localWeather(setWeatherData);
  }, []);

  return (
    <React.Fragment>
      {weatherData.showLoader ? (
        <div className="weather-loader">
          <img
            className="weather-loader__image"
            src={loader}
            alt="checking location"
          />
        </div>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default Weather;
