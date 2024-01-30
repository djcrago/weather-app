import getWeatherData from './getWeatherData';
import processWeatherData from './processWeatherData';
import displayWeatherData from './displayWeatherData';
import displayController from './displayController';
import addToggleUnitsEventListener from './addToggleUnitsEventListener';

export default async function weatherController(locationName, units) {
  if (locationName) {
    const data = await getWeatherData(locationName);

    const formattedData = await processWeatherData(data);

    if (formattedData !== 'error') {
      addToggleUnitsEventListener(formattedData, units);

      displayWeatherData(formattedData, units);

      displayController(formattedData, units);
    }

    if (formattedData === 'error') {
      alert('Location not found. Please ensure spelling is correct.');
    }
  }
}
