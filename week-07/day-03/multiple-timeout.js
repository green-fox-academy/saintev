'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function printFruits (fruit) {
  console.log(fruit);
}

setTimeout( () => {
  printFruits( 'apple' );
}, 0 );

setTimeout( () => {
  printFruits( 'pear' );
}, 1000 );

setTimeout( () => {
  printFruits( 'melon' );
}, 3000 );

setTimeout( () => {
  printFruits( 'grapes' );
}, 5000 );