'use strict';

//Given a string, 
//compute recursively(no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function changeLetters(word: string) {
  if (word.indexOf('x') === -1) {
    return word;
     
  } else {
    return changeLetters(word.replace('x', 'y')); 
  }
}
console.log(changeLetters('xxxxxxi'));






