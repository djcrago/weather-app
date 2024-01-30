const location = document.querySelector('.location');
const temp = document.querySelector('.temp');
const rain = document.querySelector('.rain');
const wind = document.querySelector('.wind');

export default function displayWeatherData(dataObject, units) {
  location.textContent = `${dataObject.town}, ${dataObject.state}`;

  let temperature;
  let rainFall;
  let windSpeed;

  if (units === 'imperial') {
    temperature = `${dataObject.tempF} degrees Fahrenheit`;
    rainFall = `${dataObject.precipIN} inches`;
    windSpeed = `${dataObject.windMPH} miles per hour`;
  }

  if (units === 'metric') {
    temperature = `${dataObject.tempC} degrees Celsius`;
    rainFall = `${dataObject.precipMM} millimeters`;
    windSpeed = `${dataObject.windKPH} kilometers per hour`;
  }

  temp.textContent = `Current Temperature: ${temperature}`;
  rain.textContent = `Amount of rainfall: ${rainFall}`;
  wind.textContent = `Wind Speed: ${windSpeed}`;
}
