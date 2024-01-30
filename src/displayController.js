import displayWeatherData from './displayWeatherData';
import displayWeatherImage from './displayWeatherImage';
import displayBackgroundColor from './displayBackgroundColor';

export default function displayController(formattedData, units) {
  displayWeatherData(formattedData, units);

  const weather = displayWeatherImage(formattedData, units);

  displayBackgroundColor(weather);
}
