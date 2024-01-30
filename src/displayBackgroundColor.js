const output = document.querySelector('.output');

export default function displayBackgroundColor({ cold, rainy, windy }) {
  output.className = 'output';

  if (cold) {
    output.classList.add('cold');
  }

  if (rainy) {
    output.classList.add('rainy');
  }

  if (windy) {
    output.classList.add('windy');
  }
}
