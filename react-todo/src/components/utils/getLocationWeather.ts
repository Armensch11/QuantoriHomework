import { ILocationCurrent, IWeatherData } from "../../Interfaces/Interfaces";
import { Dispatch, SetStateAction } from "react";
import { getWeather } from "./getWeather";

export const getLocationWeather = async (
  setData: Dispatch<SetStateAction<IWeatherData>>
) => {
  const locationSuccess = async (pos: GeolocationPosition) => {
    const locationCurrent: ILocationCurrent = { latitude: "", longitude: "" };

    locationCurrent.latitude = pos.coords.latitude.toFixed(4);
    locationCurrent.longitude = pos.coords.longitude.toFixed(4);
    const reqParam = locationCurrent.latitude + "," + locationCurrent.longitude;

    await getWeather(reqParam, setData);
  };

  const locationError = async () => {
    process.env.REACT_APP_DEFAULT_LOCATION
      ? await getWeather(process.env.REACT_APP_DEFAULT_LOCATION, setData)
      : await getWeather("Tbilisi", setData);
  };

  navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
};
