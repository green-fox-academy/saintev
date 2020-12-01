'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
let successInfo: boolean = true;

function copyFile(fileName) {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    fs.writeFileSync('message.txt', fileContent);
}
try {
copyFile('my-secondfile.txt');
}
catch(e) {
console.log();
    successInfo = false;
  console.log('Copy was unsuccessful :('); 
  }

if(successInfo === true) {
console.log('Success!');
}