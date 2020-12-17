'use strict';

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let x: number = quote.indexOf('you');
console.log(quote.indexOf('you'));


quote = quote.slice(0, x - 1) + ' always takes longer than ' + quote.slice(x);

console.log(quote);

//vagy
quote = [quote.slice(0, quote.indexOf('It')+2), ' always takes longer than', (quote.slice(quote.indexOf('It')+2))].join('');

console.log(quote);