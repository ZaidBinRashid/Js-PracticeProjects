// Global variables.
const displayContainer = document.querySelector('.displayContainer')
const calculateBtn = document.querySelector('.calculate')

// Add click event listener to calculate buttton.
calculateBtn.addEventListener('click', calculate)

// Function for calculating BMI and addding conditionals.
function calculate() {
    // Local variables.
    let weightInput = document.querySelector('.weight').value
    let heightInput = document.querySelector('.height').value
    
    // BMI variable storing the BMI calculated from the formula 
    let BMI = (weightInput / ((heightInput / 100) ** 2)).toFixed(1)

    // Creating html element to display the calculation.
    const p = document.createElement('p')
    displayContainer.appendChild(p)

    // Conditionals to know the status of ones weight 
    if (BMI < 18.5) {
        p.innerHTML = `Your BMI is ${BMI} and you are Under Weight.`;
    }
    else if (BMI >= 18.6 && BMI <= 24.9) {
        p.innerHTML = `Your BMI is ${BMI} and you have Normal Weight.`;
    }
    else if (BMI > 24.9) {
        p.innerHTML = `Your BMI is ${BMI} and you are Over Weight.`;
    }

    // Conditionals for entering improper data.
    if(weightInput === '' && heightInput === '') {
        p.innerHTML =  `Please  enter proper information`
    }
    else if(weightInput === '' && heightInput) {
        p.innerHTML  = `Please enter proper weight`
    }
    else if(weightInput && heightInput === '') {
        p.innerHTML  = `Please enter proper height`
    }

}