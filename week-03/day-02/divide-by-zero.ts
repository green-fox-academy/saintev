'use strict';

// Create a function that takes a number divides ten with it and prints the result.
// It should print 'fail' if the parameter is 0.

let number: number = 0;

function divide(x: number) {
  let result: number = (10/x);
  console.log(result);
}
  
try {
  if (number === 0) {
    throw 'fail';
  }
  divide(number);
  
} catch(e) {
console.log(`fail`);
}