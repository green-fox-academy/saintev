'use strict';

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
function quoteSwap(MessedUpQuotes) {
[MessedUpQuotes[2], MessedUpQuotes[5]]=[MessedUpQuotes[5], MessedUpQuotes[2]]
console.log(MessedUpQuotes);
}
quoteSwap(words);

// Expected output: "What I cannot create I do not understand."

let words2: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
function swap(quote: string []) {
  let x: number = words2.indexOf('cannot');
  quote.splice(x, 1, 'do');
  let y: number = words2.indexOf('do');
  quote.splice(y, 1, 'cannot');
  console.log(quote);
  
}
swap(words2);


