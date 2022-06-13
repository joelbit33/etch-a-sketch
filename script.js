const container = document.getElementById('container');
const matrixSize = document.querySelector('.matrixDim');
const resetButton = document.querySelector('.resetButton')

// Matrix standard dimension
const defaultMatrixSize = 16;


function createMatrix(rowCol) {
  // Creates the squares depending on input (how many rowCol)
  for (let i = 0; i < rowCol ** 2; i++) {
    let div = document.createElement('div');
    container.appendChild(div).classList.add('squareDiv');
  }

  let squareDiv = document.querySelectorAll('.squareDiv');

  // Adjusts the size of each square to fit the board and allows mouse-over(painting)
  squareDiv.forEach((square) => {
    square.style.flex = `0 ${100 / rowCol}%`;
    square.addEventListener('mouseover', function () {
      square.style.background = 'black';
    })
  });
}
createMatrix(defaultMatrixSize);

// Change size of matrix
function changeMatrixSize() {
  let userInput = parseInt(prompt('Change Size: '));

  if (userInput <= 100 && userInput >= 1) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createMatrix(userInput);

  } else {
    console.log('Only values between 1 and 100')
  }
}

matrixSize.addEventListener('click', changeMatrixSize);


// Resets Matrix and creates new with default values
function resetMatrix() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createMatrix(defaultMatrixSize);
}

resetButton.addEventListener('click', resetMatrix)















