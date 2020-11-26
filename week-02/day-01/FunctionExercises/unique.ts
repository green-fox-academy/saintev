'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let listOfNumbers: number[] = [1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7];

let removedNumbers: number[];

for (let i: number = 0; i < listOfNumbers.length - 1; i++) {
  for (let j: number = i + 1; j < listOfNumbers.length; j++) {
    while (listOfNumbers[i] === listOfNumbers[j]) {
      removedNumbers = listOfNumbers.splice(j, 1);
      }
  }
}

console.log(listOfNumbers);
