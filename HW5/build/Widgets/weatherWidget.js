var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function weatherWidget() {
    return __awaiter(this, void 0, void 0, function* () {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    });
}
function widgetFrame(icon, temp, name) {
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
    [image, temperature, city].forEach((el) => weatherContainer === null || weatherContainer === void 0 ? void 0 : weatherContainer.appendChild(el));
}
const locationSuccess = (pos) => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = "8865504129134593933100446231304";
    const locationCurrent = { latitude: "", longitude: "" };
    let reqParam = "";
    locationCurrent.latitude = pos.coords.latitude.toFixed(4);
    locationCurrent.longitude = pos.coords.longitude.toFixed(4);
    reqParam = locationCurrent.latitude + "," + locationCurrent.longitude;
    try {
        const weatherData = yield fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${reqParam}&aqi=no`);
        const weather = yield weatherData.json();
        console.log(weather);
        const [icon, temp, city] = [
            weather.current.condition.icon,
            weather.current.temp_c,
            weather.location.name,
        ];
        widgetFrame(icon, temp, city);
    }
    catch (error) {
        console.error(error);
    }
});
const locationError = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = "8865504129134593933100446231304";
    const locationDefault = "Tbilisi";
    try {
        const weatherData = yield fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationDefault}&aqi=no`);
        const weather = yield weatherData.json();
        const [icon, temp, city] = [
            weather.current.condition.icon,
            weather.current.temp_c,
            weather.location.name,
        ];
        widgetFrame(icon, temp, city);
    }
    catch (error) {
        console.error(error);
    }
});
