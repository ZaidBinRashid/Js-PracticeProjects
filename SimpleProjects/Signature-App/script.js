const colorPicker = document.querySelector('#colorPicker')
const canvasColor = document.querySelector('#canvasColor')
const fontSize  = document.querySelector('#fontSizePicker')
const clearBtn = document.querySelector('#clearBtn')
const saveBtn = document.querySelector('#saveBtn')
const retrieveBtn = document.querySelector('#retrieveBtn')
const myCanvas = document.querySelector('#myCanvas')

const ctx = myCanvas.getContext("2d");

let isDrawing;

colorPicker.addEventListener('change', (event) => {
    ctx.fillStyle = event.target.value;
    ctx.strokeStyle = event.target.value;
});

canvasColor.addEventListener('change', (event) => {
    ctx.fillStyle = event.target.value;
    ctx.fillRect(0, 0, 800, 500);
});

myCanvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

myCanvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        lastX = event.offsetX;
        lastY = event.offsetY;
    }
});

myCanvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

myCanvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

fontSizePicker.addEventListener('change', (event) => {
    ctx.lineWidth = event.target.value;
    // ctx.font = `${fontPicker.value} ${event.target.value}px`;
});

clearBtn.addEventListener('click', () => {
    // Clear the canvas
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
})

  // Add event listener for the save button
  saveBtn.addEventListener('click', () => {
    localStorage.setItem('canvasContents', myCanvas.toDataURL());
    // Create a new <a> element
    let link = document.createElement('a');

    // Set the download attribute and the href attribute of the <a> element
    link.download = 'my-canvas.png';
    link.href = myCanvas.toDataURL();

    // Dispatch a click event on the <a> element
    link.click();
});

// Add event listener for the retrieve button
retrieveBtn.addEventListener('click', () => {
    // Retrieve the saved canvas contents from local storage
    let savedCanvas = localStorage.getItem('canvasContents');

    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img, 0, 0);
    }
});
