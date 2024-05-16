const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
let display = document.querySelector('.display')

let count = 0;

increaseBtn.addEventListener('click', () => {
  display.textContent = ++count;
  if(count > 0) {
    display.style.color = 'green';
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  display.textContent = count;
  display.style.color = 'black';
});

decreaseBtn.addEventListener('click', () => {
  display.textContent = --count;
  if(count < 0) {
    display.style.color = 'red';
  }
});
