'use strict';

export function testForAnagram(word1: string, word2: string) :boolean {
  word1 = word1.split('').sort().join('');
  word2 = word2.split('').sort().join('');
  console.log(word1, word2);
  

  if (word1 === word2) {
    return true
  }
  else {
  return false}
  
  
}


console.log(testForAnagram('apple', 'pleasegrdd'));
console.log(testForAnagram('silent','listen'));






