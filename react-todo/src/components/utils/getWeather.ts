import { Dispatch, SetStateAction } from "react";
import { IWeatherData } from "../../Interfaces/Interfaces";

export const getWeather = async (
  locationParam: string,
  weatherDataSetter: Dispatch<SetStateAction<IWeatherData>>
) => {
  try {
    const weatherData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locationParam}&aqi=no`
    );
    const weather: Record<string, any> = await weatherData.json();
  
    weatherDataSetter({
      weatherConditionImageUrl: weather.current.condition.icon,
      temperature: weather.current.temp_c,
      city: weather.location.name,
      showLoader: false,
    });
  } catch (error) {
    console.error(error);
  }
};
