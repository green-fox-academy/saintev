// -  Create (dynamically*) a two dimensional list ith the following matrix**. Use a loop!
// * size should depend on a variable
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console

let n: number = 4;
let myNewMatrix: number[][] = [];

for (let i: number = 0; i < n; i++) {
  let myArray: number[] = [];
  for (let j: number = 1; j < n + 1; j++); {
    if (i === n - j) {
      myArray.push(1)
    } else {
      myArray.push(0);
    }
  }
  //console.log(myArray);
  myNewMatrix.push(myArray);
}
myNewMatrix.forEach(x => console.log(x));