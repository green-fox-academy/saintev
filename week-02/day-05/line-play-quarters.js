'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let howManyparts = 64;
let divide = Math.sqrt(howManyparts);
let x;
let y;

function drawLine(x, y) {

  for (let z = 0; z < divide; z++){
    for (let i = 5; i < (canvas.width / divide) - 5; i = i + 5) {
      let x = i;
      let y = i + 5;

        for (let j = 1; j <= divide; j++) {
          ctx.strokeStyle = 'purple';
          ctx.beginPath();
          ctx.moveTo(x , z * (canvas.width / divide));
          ctx.lineTo((canvas.width / divide) * j, y+((canvas.width / divide)*z));
          ctx.stroke();

          ctx.strokeStyle = 'green';
          ctx.beginPath();
          ctx.moveTo(z * (canvas.width / divide), x);
          ctx.lineTo (y+ z *(canvas.height / divide), canvas.height/divide *j);
          ctx.stroke();

    x = x + canvas.width / divide;
        }
    }
  }
}

drawLine(x,y);