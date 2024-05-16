const mytask = [];
const STORAGE_KEY = 'myTasks';

class NewTask {
  constructor(task, time) {
    this.task = task;
    this.time = time;
  }
}

function addTodo() {
  const task = document.getElementById('task').value;
  const time = document.getElementById('time').value;

  if (task && time) {
    const newTodo = new NewTask(task, time);
    mytask.push(newTodo);
    saveTasksToLocalStorage();
    displayTasks();
  }
}

function displayTasks() {
  let taskDisplay = document.getElementById('display');
  taskDisplay.innerHTML = '';

  for (let i = 0; i < mytask.length; i++) {
    let todo = mytask[i];
    
    let taskElement = document.createElement('div');
    taskElement.className = 'task';

    taskElement.innerHTML = `
      <span class='disTask'>Task: <span class='toTask'>${todo.task}</span></span>
      <span class='disTime'>Time: <span class='toTime'>${todo.time}</span></span>
      <button class='delete' onclick="deleteTask(${i})">Delete</button>
      <input id ='checkbox' type="checkbox">
    `;

    taskDisplay.appendChild(taskElement);
  }
}

function deleteTask(index) {
  mytask.splice(index, 1);
  saveTasksToLocalStorage();
  displayTasks();
}

function saveTasksToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mytask));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem(STORAGE_KEY);
  if (storedTasks) {
    mytask.length = 0; // Clear the existing tasks array
    mytask.push(...JSON.parse(storedTasks));
  }
}

document.getElementById('add').addEventListener('click', () => {
  addTodo();
});

loadTasksFromLocalStorage(); // Load tasks from local storage when the page loads
displayTasks(); // Display the loaded tasks
