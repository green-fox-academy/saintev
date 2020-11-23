'use strict';

let animals: string[] = ['koal', 'pand', 'zebr'];
let missingLetter: string = 'a';
for (let i: number = 0; i < animals.length; i++){
  console.log(animals[i] + missingLetter);
}