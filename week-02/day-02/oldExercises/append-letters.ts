'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(animals:string [] ) {
animals.forEach(function (letters) {
  let corrected: string [] = [(letters + 'a')];
console.log(corrected);
});
}

console.log(appendA(far));

