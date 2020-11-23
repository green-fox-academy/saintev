'use strict'

let baseNum: number = 123;
doubling(baseNum);
function doubling (baseNum: number): void{
  console.log(baseNum * 2);
}


let nameToGreet: string = 'GreenFox';
greet(nameToGreet);
function greet(name: string): void{
  console.log('Greetings, dear ' + name)
}


let typo: string = 'Chinchill';
appendAFunc(typo);
function appendAFunc(words: string): string{
  let appendedName: string = (words + 'a');
  console.log(appendedName);
  return appendedName;
}