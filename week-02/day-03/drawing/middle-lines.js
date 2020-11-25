'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// draw a red horizontal line to the canvas' middle
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(500, 200);
ctx.stroke();

// draw a green vertical line to the canvas' middle
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.stroke();