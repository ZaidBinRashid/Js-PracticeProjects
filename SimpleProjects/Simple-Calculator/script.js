//  // Global variables.
let displayValue = '';
let operator = '';
let firstNumber = null;
let resultDisplayed = false;

// Function to append digits to the display.
function appendToDisplay(value) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

// Function to set the operator.
function setOperator(op) {
  if (firstNumber !== null && displayValue !== '') {
    calculate();
  }
  operator = op;
  resultDisplayed = false;
  if (firstNumber === null) {
    firstNumber = parseFloat(displayValue);
    displayValue = '';
    document.getElementById('display').innerText = displayValue;
  }
}

// Function to clear the display.
function clearDisplay() {
  displayValue = '';
  operator = '';
  firstNumber = null;
  document.getElementById('display').innerText = displayValue;
}

// Function to calculate and display the result.
function calculate() {
  if (firstNumber !== null && operator !== '' && displayValue !== '') {
    const secondNumber = parseFloat(displayValue);
    switch (operator) {
      case '+':
        firstNumber += secondNumber;
        break;
      case '-':
        firstNumber -= secondNumber;
        break;
      case '*':
        firstNumber *= secondNumber;
        break;
      case '/':
        if (secondNumber !== 0) {
          firstNumber /= secondNumber;
        } else {
          firstNumber = 'Infinity';
        }
        break;
    }
    document.getElementById('display').innerText = firstNumber;
    displayValue = '';
    operator = '';
    resultDisplayed = true;
  }
}