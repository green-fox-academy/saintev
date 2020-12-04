'use strict';

function fibonacciNumber(n: number) {
let fibonacci: number[] = [0, 1];

  for (let i: number = 2; i <= n; i++){
fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
 // return fibonacciNumber[n];
  }
  
  console.log(fibonacci[n]);
  
}
fibonacciNumber(9);

//
//function fibonacciNumber(n: number) {
//let fibonacci: number[] = [0, 1];
//  if (n  === fibonacci.length) {
//    return;
//  } else {
//    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2]);
//    return fibonacci[n];
//  }
//}
//console.log(fibonacciNumber(9));