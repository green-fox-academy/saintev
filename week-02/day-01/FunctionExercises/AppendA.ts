'use strict'

let typo: string = 'Chinchill';
appendAFunc(typo);
function appendAFunc(words: string): string{
  let appendedName: string = (words + 'a');
  console.log(appendedName);
  return appendedName;
}

