'use strict';
// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers: number[] = [1, 2, 3, 8, 5, 6];

//for (let i: number = 0; i < numbers.length; i++){
//  numbers[i] = i + 1;
//}
//console.log(numbers);

let newNumbers: number[] = numbers.map(function (num, index) { // a num ami az ertek es az index ahanyadik helyen van
  num = index + 1
  return num

});
console.log(newNumbers);