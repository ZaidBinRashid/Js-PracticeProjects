// Global Variables.
let countDownInterval;
let minutes = 15;
let seconds = 59;
let minInputEl = document.getElementById("min");
let secInputEl = document.getElementById("sec");
let startBtn = document.querySelector(".start");

// Function to toggle text, start and stop timer.
function toggleText(button) {
  if (button.innerHTML === "START") {
    button.innerHTML = "PAUSE";
    startTimer();
  } else if (button.innerHTML === "PAUSE") {
    button.innerHTML = "START";
    pauseTimer();
  }
}

// Button to start/Pause the  timer.
startBtn.addEventListener("click", () => {
  toggleText(startBtn);

// Updates the new value entered to the variables.
  minutes = parseInt(minInputEl.value);
  seconds = parseInt(secInputEl.value);
});

// Function to start the timer.
function startTimer() {
  countDownInterval = setInterval(function () {
    minInputEl.value = minutes < 10 ? "0" + minutes : minutes;
    secInputEl.value = seconds < 10 ? "0" + seconds : seconds;
    seconds--;

    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }

    if (minutes < 0) {
      clearInterval(countDownInterval);
    }

    if (minutes === 0 && seconds === 0) {
      timeUp();
    }
  }, 1000);
}

// Function to pause the timer.
function pauseTimer() {
  clearInterval(countDownInterval);
}

// Function to prompt the time up alert.
function timeUp() {
  setTimeout(function () {
    alert("Time's Up!!");
    document.querySelector(".ring").style.stroke = "red";
  }, 2000);
}

// To edit the Timer and put the desired value.
document.querySelector(".settings").addEventListener("click", () => {
  minInputEl.removeAttribute("disabled");
  secInputEl.removeAttribute("disabled");
 
  if (startBtn.innerHTML === "PAUSE") {
    startBtn.innerHTML = "START";
    pauseTimer();
  }
});
