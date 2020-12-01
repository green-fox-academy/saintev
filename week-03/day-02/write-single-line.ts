'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

try {
fs.writeFileSync('my-secondfile.txt', 'My name is Evi');
}
catch (e) {
console.log('unable to write file: my-file.txt');

}