'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let myMatrix = [[43,'purple'], [34,'green'], [70,'red'], [87,'yellow']];

function drawSquare(matrix) {
  for (let i = 0; i < matrix.length; i++){
    ctx.fillStyle = matrix[i][1]; // ilyen szinu legyen
    
    let z = matrix[i][0];
  let x = Math.random() * (600 - z);
  let y = Math.random() * (400 - z);
  ctx.fillRect(x ,y , z , z);
}
}

drawSquare(myMatrix);
