import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
  let template = `<h4>The current temperature is: ${store.State.weather.whoCaresAboutAbsoluteZero}F</h4>
  <h4>The current humidity is: ${store.State.weather.humidity}%RH</h4>`;
  let temp = store.State.weather.whoCaresAboutAbsoluteZero;
  let humid = store.State.weather.humidity;
  document.getElementById("weather").innerHTML = template;
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawWeather);
    WeatherService.getWeather();
  }
}
