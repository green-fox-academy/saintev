// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let howManyStars = 1000;

let width = 600;
let height = 400;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

//ctx.fillStyle = 'rgb(128,128,128)';

function drawStar(x, y) {
  let z = Math.random() * 255; // random szamot general 128 es 211 kozott ami a szurke
  let color = 'rgb(' + z + ',' + z + ',' + z +')'; // osszerakja egy stringge
  ctx.fillStyle = color;
    ctx.fillRect(x, y, 2, 2);
}

for (let i = 1; i <= howManyStars; i++){
  x = Math.random() * (width - 2);
  y = Math.random() * (height - 2);
  drawStar(x, y);
}