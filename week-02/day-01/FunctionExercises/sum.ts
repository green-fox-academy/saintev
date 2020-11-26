'use strict';


// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let number: number = 7;

function summarize(number: number): number {
  console.log('the number until we are adding is ' + number);
  let sum: number = 0;
  for (let i = 0; i <= number; i++){
   sum += i;
  }
    
  console.log(sum);
  return sum;
}
summarize(number);
