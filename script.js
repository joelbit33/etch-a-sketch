const container = document.getElementById('container');
const matrixSize = document.querySelector('.matrixDim');
const resetButton = document.querySelector('.resetButton');
const colorPicker = document.querySelector('.colorPicker');

let currentColor = '#000000';
let currentSizeString = document.querySelector('.currentSize');
let sliderValue = document.querySelector('#sliderValue');

// Matrix standard dimension
const defaultMatrixSize = 16;

function createMatrix(rowCol) {
  // Creates the squares in container depending on input (how many rows/columns)
  for (let i = 0; i < rowCol ** 2; i++) {
    let div = document.createElement('div');
    container.appendChild(div).classList.add('squareDiv');
  }
  currentSizeString.innerText = `${rowCol} x ${rowCol}`;
  let squareDiv = document.querySelectorAll('.squareDiv');

  // Adjusts the size of each square to fit the board and allows mouse-over(painting)
  squareDiv.forEach((square) => {
    square.style.flex = `0 ${100 / rowCol}%`;
    square.addEventListener('mouseover', function () {
      square.style.background = currentColor;
    })
  });
}
createMatrix(defaultMatrixSize);


// Sets new color value to currentColor
colorPicker.addEventListener('input', e => {
  currentColor = e.target.value;
})

// Change size of matrix with the slider
sliderValue.addEventListener('change', function(e) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  inputValue = parseInt(e.target.value);
  createMatrix(inputValue);
})

// Resets Matrix and creates new with default values
function resetMatrix() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createMatrix(defaultMatrixSize);
}

resetButton.addEventListener('click', resetMatrix)





// Change size of matrix
// function changeMatrixSize() {
//   let userInput = parseInt(prompt('Change Size: '));

//   if (userInput <= 100 && userInput >= 1) {
//     while (container.firstChild) {
//       container.removeChild(container.firstChild);
//     }
//     createMatrix(userInput);

//   } else {
//     alert('Only values between 1 and 100')
//   }
// }

// matrixSize.addEventListener('click', changeMatrixSize);






















