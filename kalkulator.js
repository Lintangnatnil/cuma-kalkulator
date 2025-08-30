let screen = document.getElementById('screen');
let currentInput = '';

function appendToScreen(value) {
  if (value === '=') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
    screen.textContent = currentInput;
  } else {
    currentInput += value;
    screen.textContent = currentInput;
  }
}

function clearScreen() {
  currentInput = '';
  screen.textContent = '0';
}
