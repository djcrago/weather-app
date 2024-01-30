import displayController from './displayController';

export default function addToggleUnitsEventListener(
  formattedData,
  units = 'imperial'
) {
  const toggleUnits = document.querySelector('.toggle-units');

  toggleUnits.addEventListener('click', () => {
    if (units === 'imperial') {
      units = 'metric';
    } else {
      units = 'imperial';
    }

    displayController(formattedData, units);
  });
}
