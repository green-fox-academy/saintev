'use strict';

let oddLines: any = '% ';
let evenLines: any = ' %';
  
  for (let i: number = 0; i < 3; i++) {
    oddLines += '% ';
  } for (let j: number = 0; j < 3; j++) {
    evenLines += ' %'
  }

for (let a: number = 0; a < 4; a++) {

  console.log(oddLines);
  console.log(evenLines);
}
