'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


function drawSingleLine(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}
//felso es also
for (let i = 0; i <= 600; i += 20){
  drawSingleLine(i, 0);
  drawSingleLine(i, 400);  
}

//jobbrol es balrol
for (let i = 0; i <= 400; i += 20){
  drawSingleLine(0, i);
  drawSingleLine(600, i);  
}