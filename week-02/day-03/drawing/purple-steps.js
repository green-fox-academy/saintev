'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawRectangle(x, y) {
ctx.fillStyle = 'purple';
ctx.fillRect(x, y, 10, 10);

}


for (let i = 1; i < 30; i++){
  drawRectangle((i * 10),(i * 10)); 
}
