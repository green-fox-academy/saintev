'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x, y) {
  ctx.strokeRect(x, y, 50,50);
}

for (let i = 1; i < 4; i++){
  drawSquare(i * 70, i * 100);
}
