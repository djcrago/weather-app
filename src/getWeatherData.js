export default async function getWeatherData(location) {
  const rawData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=57b933de6d574154bba222541242701&q=${location}`
  );

  return rawData.json();
}
