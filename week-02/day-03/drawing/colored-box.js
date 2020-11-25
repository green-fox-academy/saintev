'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'green'; 
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(400, 200);
ctx.stroke();

ctx.strokeStyle = 'yellow'; 
ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.strokeStyle = 'red'; 
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.strokeStyle = 'purple'; 
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 200);
ctx.stroke();