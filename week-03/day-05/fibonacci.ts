//'use strict';
//
//function fibonacciNumber(n: number) {
//let fibonacci: number[] = [0, 1];
//
//  for (let i: number = 2; i <= n; i++){
//fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
// // return fibonacciNumber[n];
//  }
//  
//  console.log(fibonacci[n]);
//  
//}
//fibonacciNumber(9);


function fibonacciNumber(n: number) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
  }
}
console.log(fibonacciNumber(10));



