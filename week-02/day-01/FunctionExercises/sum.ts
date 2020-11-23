'use strict';

let number: number = 7;

summarize(number);
function summarize(number: number): number {
  console.log('the number until we are adding is ' + number);
  let sum: number = 0;
  for (let i = 0; i <= number; i++){
   sum += i;
  }
    
  console.log(sum);
  return sum;
}
