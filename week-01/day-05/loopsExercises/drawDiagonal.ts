'use strict'

let lineCount: number = 6;
let outcome: any = '%';

for (let i: number = 0; i < lineCount; i++){
outcome+= '%'
} console.log(outcome);

for (let j: number = 0; j < lineCount - 1; j++) {
  outcome = '%'
  
  for (let k: number = 0; k < j ; k++) { // ennyi hely van a % elott
    outcome += ' ';
    
  }
  outcome += '%';
  for (let l: number = 0; l < lineCount - 2 - j; l++) { // ennyi utana
    outcome += ' ';
    
  }
  
  
  outcome += '%';

  console.log(outcome);
}
outcome = '%';
for (let i: number = 0; i < lineCount; i++){
  outcome += '%';
} console.log(outcome);
