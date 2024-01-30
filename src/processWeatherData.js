export default function processWeatherData(data) {
  try {
    const {
      precip_mm: precipMM,
      precip_in: precipIN,
      temp_c: tempC,
      temp_f: tempF,
      wind_kph: windKPH,
      wind_mph: windMPH,
    } = data.current;

    const { name: town, region: state } = data.location;

    return {
      town,
      state,
      precipMM,
      precipIN,
      tempC,
      tempF,
      windKPH,
      windMPH,
    };
  } catch (error) {
    console.log(error);
    return 'error';
  }
}
