const container = document.getElementById('container');


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

let matrixDim = createMatrix(16);



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

let matrixSize = (document.querySelector('.matrixDim'));
matrixSize.addEventListener('click', changeMatrixSize);















