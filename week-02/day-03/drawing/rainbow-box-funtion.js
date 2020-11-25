'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawSquare(z, color) {
  ctx.fillStyle = color; 
  ctx.fillRect(0, 0, z, z);
}

//for (let i = 1; i < 7; i++){
 // let randomColors = ['red', 'yellow', 'green']
  drawSquare(50, 'red');
//}