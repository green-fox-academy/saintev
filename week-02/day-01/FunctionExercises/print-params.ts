'use strict';


// -  Create a function called `printParams` which logs to the console the input parameters
//    (can have multiple number of arguments)

let inputParameters: number[] = [32, 234, 45, 34, 43,];

function printParams(words: any): any{
  for (let i: number = 0; i < words.length; i++) {
  console.log(words[i]);
  
  }

}
printParams(inputParameters);
