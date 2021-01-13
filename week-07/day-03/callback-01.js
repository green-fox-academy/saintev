'use strict';


  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.


const mapWith = (array, callback) => {
  let output = [];
  //output = array.map( number => {
  //callback( number );
  array.forEach(number => {
    output.push(callback(number))
  })
    return output;
}
 // Exercise 1:

  const addOne = ( number ) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string



const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = ( string ) => {
  let newString = string.slice( 0,-1 );
  return newString;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']