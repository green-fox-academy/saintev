'use strict';

let lineCount: number = 6;
let solution: any = '%';
      
for (let j: number = 0; j < lineCount; j++) {
    solution += '%'
}
console.log(solution);
  
for (let i: number = 0; i < lineCount-2; i++) {
  solution = '%';
  for (let j: number = 0; j < lineCount - 1; j++) {
    solution += ' ';
  } solution += '%';
  
  console.log(solution);
}
  solution = '%'
for (let m: number = 0; m < lineCount; m++){
  solution += '%'
}
console.log(solution);
