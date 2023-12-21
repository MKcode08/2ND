let automaticMode = false;
let interval;
let currentColorIndex = 0; // Added a variable to keep track of the current color index

function toggleAutomatic() {
  automaticMode = !automaticMode;
  if (automaticMode) {
    interval = setInterval(changeColorAutomatically, 500); // Pakeista į 500 ms (pusė sekundės)
  } else {
    clearInterval(interval);
  }
}

function changeColor(color) {
  clearInterval(interval);
  updateTrafficLight(color);
}

function changeColorAutomatically() {
  const colors = ['red', 'yellow', 'green'];
  const nextColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Move to the next color in the cycle
  updateTrafficLight(nextColor);
}

function updateTrafficLight(color) {
  const redLight = document.getElementById('redLight');
  const yellowLight = document.getElementById('yellowLight');
  const greenLight = document.getElementById('greenLight');

  redLight.style.backgroundColor = '#ccc';
  yellowLight.style.backgroundColor = '#ccc';
  greenLight.style.backgroundColor = '#ccc';

  if (color === 'red') {
    redLight.style.backgroundColor = '#ff5555';
  } else if (color === 'yellow') {
    yellowLight.style.backgroundColor = '#ffff55';
  } else if (color === 'green') {
    greenLight.style.backgroundColor = '#55ff55';
  }
}
