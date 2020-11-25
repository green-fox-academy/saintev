'use strict';

let a: number = 10;
let Sum: number = 0;
let Average: number;
for (let i: number = 1; i <= a; i++) {
  Sum = Sum + i;
}
console.log('Sum ' + Sum)
console.log('Average '+ Sum/a)
