'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(filename) {
  let fileContent: string []= fs.readFileSync(filename,'utf-8').split('\n');
   
    console.log(fileContent.length);
  }
 
try {
countLines(`my-file.txt`);
}
catch (e) {
console.log(0);
}

