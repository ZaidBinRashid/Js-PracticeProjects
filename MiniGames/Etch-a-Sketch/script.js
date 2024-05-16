// This function will create a grid with desirable size.
function createGrid(x) {
  const gridContainer = document.querySelector('.js-board');
  
  const  pixelSize = 800 / x;
    
    for(let i = 0; i < x * x; i++) {
      const divElement = document.createElement('div');
      divElement.className = 'pixels';
      divElement.style.width = pixelSize + 'px';
      divElement.style.height = pixelSize + 'px'
      gridContainer.appendChild(divElement);
      
      // this changes the color to black while hovering.
      divElement.addEventListener('mouseover', () =>{
        divElement.style.backgroundColor = 'black';
      });
    }
  }
  
  // To make a button that will send the user a popup asking for the number of squares per side for the new grid.
  const setSize = document.querySelector('.js-size-btn');
  setSize.addEventListener('click', () => {
    const gridContainer = document.querySelector('.js-board');
    gridContainer.innerHTML = '';
    const size = prompt('Set the size of the board (3-99) but not greater then 99.');
    createGrid(size);

    if(size >= 100 || size <= 2) {
      alert('Please set the proper size!');
      gridContainer.innerHTML = '';
    }
  })

  // This function  reset the board by looping through all child divs(pixels).
  function clearBoard() {
    let pixel = document.getElementsByClassName("pixels");
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = '';
    }
    }