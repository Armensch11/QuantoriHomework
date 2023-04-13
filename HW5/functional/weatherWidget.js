export async function weatherWidget() {
  const apiKey = "8865504129134593933100446231304";
  const container = document.getElementsByClassName("header")[0];
  const weatherContainer = document.createElement("div");
  weatherContainer.setAttribute("class", "weather-wrapper");
  container.appendChild(weatherContainer);
  const locationDefault = "Tbilisi";
  const locationCurrent = {};
  let reqParam = "";
  let weather = {};

  navigator.geolocation.getCurrentPosition(async (pos) => {
    locationCurrent.latitude = pos.coords.latitude.toFixed(4);
    locationCurrent.longitude = pos.coords.longitude.toFixed(4);
    reqParam = locationCurrent.latitude + "," + locationCurrent.longitude;
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${
        reqParam.length ? reqParam : locationDefault
      }&aqi=no`
    );
    weather = await weatherData.json();
    console.log(weather);
    const image = document.createElement("img");
    image.setAttribute("class", "weather-wrapper__image");
    image.src = weather.current.condition.icon;
    const temperature = document.createElement("span");
    temperature.setAttribute("class", "weather-wrapper__temperature");
    temperature.innerText = weather.current.temp_c;
    const city = document.createElement("span");
    city.setAttribute("class", "weather-wrapper__city");
    city.innerText = weather.location.name;
    [image, temperature, city].forEach((el) =>
      weatherContainer?.appendChild(el)
    );
  });
}
