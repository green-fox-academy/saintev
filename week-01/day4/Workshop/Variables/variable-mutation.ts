'use strict';

let a: number = 3;
a+=10;
console.log(a);

let b: number = 100;
b-=7;
console.log(b)

let c: number = 44;
c = c*2;
console.log(c);

let d: number = 125;
d = d / 5;
console.log(d);

let e: number = 8;
e = e*e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
let isF1biggerThanF2: boolean;
if(f1 > f2){
  isF1biggerThanF2 = true;
} else {
  isF1biggerThanF2 = false;
}
console.log (isF1biggerThanF2);

let g1: number = 350;
let g2: number = 200;
let isDoubleOfG2BiggerThanG1;
if((g2 *2) > g1){
  isDoubleOfG2BiggerThanG1 = true;
}else {
  isDoubleOfG2BiggerThanG1 = false;
}
console.log (isDoubleOfG2BiggerThanG1);

let h: number = 1357988018575474;
let Divisor: boolean;
if (h%11===0){
  console.log('yes');

} 

let i1: number = 10;
let i2: number = 3;
let IsItTrue: boolean;
if((i2*i2 < i1) && (i1 < i2*i2*i2)){
  IsItTrue = true;
}else {
  IsItTrue = false;
}
console.log(IsItTrue);

let j: number = 1521;
let IsItDivisible;
if((j%3)===0 || (j%5)===0){
  IsItDivisible = true;
  console.log('Yes! It is true!');
}else {
  IsItDivisible = false;
  console.log('Sorry, no');
}