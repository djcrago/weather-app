import './style.css';
import weatherController from './weatherController';

let units = 'imperial';

const toggleUnits = document.querySelector('.toggle-units');
toggleUnits.textContent = 'Metric';
toggleUnits.addEventListener('click', () => {
  if (units === 'imperial') {
    units = 'metric';
    toggleUnits.textContent = 'Imperial';
  } else {
    units = 'imperial';
    toggleUnits.textContent = 'Metric';
  }
});

const location = document.querySelector('#location');
location.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();

    weatherController(location.value, units);

    location.value = '';
  }
});

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', () => {
  weatherController(location.value, units);

  location.value = '';
});
