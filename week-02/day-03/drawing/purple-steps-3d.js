'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


//ctx.fillStyle = 'purple';
//  ctx.fillRect(10, 10, 10, 10);
//
//ctx.fillStyle = 'purple';
//  ctx.fillRect(20, 20, 20, 20);
//
//ctx.fillStyle = 'purple';
//ctx.fillRect(40, 40, 30, 30);
//  
//  ctx.fillStyle = 'purple';
//ctx.fillRect(70, 70, 40, 40);
//  
//  ctx.fillStyle = 'purple';
//ctx.fillRect(110, 110, 50, 50);


function drawSquare(x) {
  ctx.fillStyle = 'purple';
  for (let i = 1; i < 7; i++){
    ctx.fillRect(x, x, 10 * i, 10 * i);
    x = (x + (10*i));
    }
}
drawSquare(10, 10);

ctx.strokeStyle =  'red';
ctx.strokeRect(200, 50, 100, 100); 
ctx.fillStyle = 'green';
ctx.fillRect(200, 50, 100, 100); 