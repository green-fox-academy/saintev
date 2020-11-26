'use strict';


// -  Create a function called `factorio` that returns it's input's factorial

let inputNumber: number = 7;

function factorio(number: number): number {
  console.log('We are calculating the factorial of ' + number);
  let factorial: number = 1;
  for (let i = 1; i <= number; i++){
    factorial = factorial * i;
    }

   console.log(factorial);
  return factorial;

}

factorio(inputNumber);
