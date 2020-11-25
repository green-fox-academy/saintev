'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(z) {
  ctx.strokeStyle = "rgb(155, 102, 102)"; 
  ctx.strokeRect((300-(z/2)),(200-(z/2)), z, z);

}
for (let i = 1; i < 4; i++){
  drawSquare(i * 50);
}
