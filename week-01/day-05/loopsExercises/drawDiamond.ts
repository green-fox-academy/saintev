'use strict';

let lineCount: number = 7;
let half: number = (lineCount + 1) / 2;

for (let i: number = 0; i < half; i++) {
  let outcome: any = '';

  for (let j: number = 0; j < half- i; j++) {
    outcome += ' ';

    
  } outcome += '*';
  for (let k: number = 0; k < i; k++) {
    outcome += '**'
  }

  console.log(outcome);

}

for (let i: number = 0; i < half-1; i++) {
  let outcome: any = '';

  for (let j: number = 0; j < i + 2; j++) {
    outcome += ' ';

    
  } outcome += '*';
  for (let k: number = 0; k < half-i-2; k++) {
    outcome += '**'
  }

  console.log(outcome);

}