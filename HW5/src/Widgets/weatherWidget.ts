import { ILocationCurrent } from "../Interfaces/Interfaces";
import "./weatherWidget.css";

export async function weatherWidget() {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
}

function widgetFrame(icon: string, temp: string, name: string) {
  const container = document.getElementsByClassName("header")[0];
  const weatherContainer = document.createElement("div");
  weatherContainer.setAttribute("class", "weather-wrapper");
  container.appendChild(weatherContainer);
  const image = document.createElement("img");
  image.setAttribute("class", "weather-wrapper__image");
  image.src = icon;
  const temperature = document.createElement("span");
  temperature.setAttribute("class", "weather-wrapper__temperature");
  temperature.innerText = temp;
  const city = document.createElement("span");
  city.setAttribute("class", "weather-wrapper__city");
  city.innerText = name;
  [image, temperature, city].forEach((el) => weatherContainer?.appendChild(el));
}

const locationSuccess = async (pos: GeolocationPosition) => {
  const apiKey = "8865504129134593933100446231304";
  const locationCurrent: ILocationCurrent = { latitude: "", longitude: "" };
  let reqParam = "";

  locationCurrent.latitude = pos.coords.latitude.toFixed(4);
  locationCurrent.longitude = pos.coords.longitude.toFixed(4);
  reqParam = locationCurrent.latitude + "," + locationCurrent.longitude;
  try {
    const weatherData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${reqParam}&aqi=no`
    );
    const weather: Record<string, any> = await weatherData.json();
    console.log(weather);
    const [icon, temp, city] = [
      weather.current.condition.icon,
      weather.current.temp_c,
      weather.location.name,
    ];
    widgetFrame(icon, temp, city);
  } catch (error) {
    console.error(error);
  }
};
const locationError = async () => {
  const apiKey = "8865504129134593933100446231304";
  const locationDefault = "Tbilisi";
  try {
    const weatherData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationDefault}&aqi=no`
    );
    const weather = await weatherData.json();
    const [icon, temp, city] = [
      weather.current.condition.icon,
      weather.current.temp_c,
      weather.location.name,
    ];
    widgetFrame(icon, temp, city);
  } catch (error) {
    console.error(error);
  }
};
