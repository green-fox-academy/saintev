// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console

let numbers: number[] = [3, 4, 5, 6, 7];
let sum: number = 0;
  
//for (let i: number = 0; i < numbers.length; i++){
//  sum = sum + numbers[i];
//}

numbers.forEach(x => sum +=x)
console.log(sum);