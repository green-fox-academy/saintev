'use strict';


// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`


let numbers: number[] = [3, 4, 5, 6, 7];
let reversedNumbers: number[] = numbers.reverse();
console.log(reversedNumbers);

let numbers2: number[] = [3, 4, 5, 6, 7];
let temporaryArray: number[] = [];
for (let i: number = 0; i < numbers2.length; i++){
  temporaryArray.unshift(numbers2[i]);

}
console.log(temporaryArray);

