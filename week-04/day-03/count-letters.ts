'use strict';

export function countLetters(myString: string) {
  let stringArray: string[] = myString.split('').sort();
    
  let dictionary = {};
    for (let i: number = 0; i < stringArray.length; i++) {
      let count = 0;
      for (let j: number = 0; j < stringArray.length; j++){
        if (stringArray[j] === stringArray[i]) {
          count++;
      }
    }
    dictionary[stringArray[i]] = count;
  }
  return dictionary;
}

console.log(countLetters('SzentmiklosiEva'));
