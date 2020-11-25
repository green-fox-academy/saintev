'use strict';
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

let a: number = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = a;

console.log(numberToSwap1);
console.log(numberToSwap2);