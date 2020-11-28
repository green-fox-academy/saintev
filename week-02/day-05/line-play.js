'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


for (let i = 5; i < canvas.width - 5; i = i + 5) {
  let x = i;
  let y = i + 5;
        
  ctx.strokeStyle = 'purple';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(canvas.width, x);
  ctx.stroke();

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(0, x);
  ctx.lineTo(y, canvas.height);
  ctx.stroke();

  x = x + canvas.width;
        
}