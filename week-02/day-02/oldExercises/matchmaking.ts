'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kate', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];


function makingMatches(list1: string [],list2: string[]) {
for (let i: number = 0; i < (list1.length || list2.length); i++) {
  let matchedArray: string[] =[];
  matchedArray.push(list1[i], list2[i]);
  console.log(matchedArray);
  }
}
makingMatches(girls, boys);

