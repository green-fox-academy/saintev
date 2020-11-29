'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(randomNumberList) {
  if ((randomNumberList.indexOf(7)) === -1){

    console.log('Nooooooo');
  }else {
  console.log('Hoorray');
  }
}
containsSeven(numbers);