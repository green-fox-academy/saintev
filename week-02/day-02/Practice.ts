'use strict';

let a: string = 'I am a new string';
console.log('Message from a(2) ' + a.charAt(2));


let b: string = 'I AM A CAPITAL STRING';  
console.log('Changed to lowercase' + b.toLowerCase());

let c: string = 'i am all lowercase now';
console.log(c.toUpperCase());

let sliced: any= a.slice(3, -2);
console.log(sliced);

let str: string = 'This is a new string';
console.log(str.charAt(0));
console.log(str.charCodeAt(1));
let str3: string = a.concat(b.toString());
console.log('a + b = ' + str3);

let str4: string = 'Here I am the newest string!';
console.log(str4.indexOf('newest'));

let re: any = /newest/gi;
var newstring: string = str4.replace(re, 'oldest');
console.log(newstring);

let sample: string[]
sample=['one', 'two', 'three', 'four']
console.log(sample[1]);
console.log(sample[0]);

let matrix: number[][] = new Array();
matrix.push([1, 2, 3]);
matrix.push([4,5,6]);
matrix.push([7, 8, 9]);
console.log(matrix[0][1]);

let matrix2: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix2[2][2]);

//creating objects with class
let pets = {
  animaltype: 'cat',
  animalage: 1
}
console.log(('My pet: ' + pets.animaltype));
console.log('Age of pet is '+pets.animalage);

//creating objects without class
let john = {};
console.log(typeof john);

// john2 has two keys: first one is john, second one is speak
let john2 = { 'name': 'john', 'speak': function () { console.log('speaking'); } };
console.log(john2.speak); // prints the function
console.log(john2.speak()); // prints undefined



