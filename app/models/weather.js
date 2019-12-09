function _k2f(k) {
  let first = k - 273.15;
  return first * (9 / 5) + 32;
}

export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    let degF = _k2f(data.main.temp);
    this.whoCaresAboutAbsoluteZero = degF.toFixed(1);
    this.humidity = data.main.humidity;
  }
}
