'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

//elismetli negyszer a ket sort
for (let j = 0; j < 4; j++){
 
  //megrajzolja az elso sorban a fekete negyzeteket
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(i * 100,j*100, 50, 50);
  }
  // masodik sorban a fekete negyzetek
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(i * 100 + 50, j*100+50, 50, 50);
  }
}
//keretet rajzol az egesznek
ctx.strokeStyle =  'black';
ctx.strokeRect(0, 0, 400, 400); 

//}
////paros sorok
//for (let j = 0; j < 4; j++) {
//  
//  //rajzol egy fekete teglalapot az egesz sorba
//  ctx.fillStyle = 'black';
//  ctx.fillRect(0, ((j * 100) + 50), 400, 50);
//  for (let i = 0; i < 4; i++) {
//    ctx.fillStyle = 'white';
//    ctx.fillRect((i * 100), ((j*100)+50), 50, 50);
//  }
//}
