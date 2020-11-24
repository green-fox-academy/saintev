'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

//split to an Array of strings
let splitLetters: string[] = toBeReversed.split('');
console.log(splitLetters);

//reverse
let reversedLetters: string[] = splitLetters.reverse();
console.log(reversedLetters);

//join
let reversedText: string = reversedLetters.join('');


console.log(reversedText);

//export = reverse;