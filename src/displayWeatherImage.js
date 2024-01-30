import Cold from './images/cold.png';
import Rainy from './images/rainy.png';
import Sunny from './images/sunny.png';
import Windy from './images/windy.png';

const coldImage = new Image();
coldImage.src = Cold;
const rainyImage = new Image();
rainyImage.src = Rainy;
const sunnyImage = new Image();
sunnyImage.src = Sunny;
const windyImage = new Image();
windyImage.src = Windy;

const imageOutput = document.querySelector('.image');

export default function displayWeatherImage(dataObject, units) {
  imageOutput.innerHTML = '';

  let temperature;
  let rainFall;
  let windSpeed;

  let cold = false;
  let rainy = false;
  let windy = false;

  if (units === 'imperial') {
    temperature = dataObject.tempF;
    rainFall = dataObject.precipIN;
    windSpeed = dataObject.windMPH;

    if (temperature < 32) {
      cold = true;
    }

    if (rainFall > 2) {
      rainy = true;
    }

    if (windSpeed > 15) {
      windy = true;
    }
  }

  if (units === 'metric') {
    temperature = dataObject.tempC;
    rainFall = dataObject.precipMM;
    windSpeed = dataObject.windKPH;

    if (temperature < 0) {
      cold = true;
    }

    if (rainFall > 25) {
      rainy = true;
    }

    if (windSpeed > 25) {
      windy = true;
    }
  }

  if (cold) {
    imageOutput.appendChild(coldImage);
  }

  if (rainy) {
    imageOutput.appendChild(rainyImage);
  }

  if (windy) {
    imageOutput.appendChild(windyImage);
  }

  if (!cold && !rainy && !windy) {
    imageOutput.appendChild(sunnyImage);
  }

  return {
    cold,
    rainy,
    windy,
  };
}
