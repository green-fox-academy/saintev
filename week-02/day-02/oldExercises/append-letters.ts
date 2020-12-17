'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];


let appendedAnimals = far.map(x => {
  return (x + 'a');
});
console.log(appendedAnimals);


