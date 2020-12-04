'use strict';

//We have a number of bunnies and each bunny has two big floppy ears. 
//We want to compute the total number of ears across all the bunnies recursively(without loops or multiplication).

function countBunnyEars(n: number) {
  if (n === 0) {
    return 0;
  } else {
    return (2 + countBunnyEars(n - 1));
  }
}
console.log(countBunnyEars(10));