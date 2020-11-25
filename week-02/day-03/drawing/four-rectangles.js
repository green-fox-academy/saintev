'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRectangle(x, y, z) {
  ctx.strokeRect(x, y, z, z);
}

for (let i = 1; i < 5; i++){
drawRectangle(i*20, i*30, i*40);
}

ctx.strokeStyle = 'green';
ctx.strokeRect(70, 80, 150, 150);

ctx.strokeStyle = 'blue';
ctx.strokeRect(100, 200, 250, 50);

ctx.strokeStyle = 'magenta';
ctx.strokeRect (300, 180, 20, 50);
