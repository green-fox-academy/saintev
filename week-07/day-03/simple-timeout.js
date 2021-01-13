'use strict';

function printApple() {
  console.log('apple');
}
setTimeout( printApple, 3000 );


function printWord ( word ) {
  console.log(word);
}
setTimeout(() => {
  printWord('pear');
}, 1000);