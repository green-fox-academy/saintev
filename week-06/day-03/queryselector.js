'use strict';

//1. store the element that says 'The King' in the 'king' variable. console.log it.

console.log(window);
console.log( document );
const king = document.getElementById( 'b325' );
console.log( king );

const king2 = document.querySelector("#b325");
console.log(king2);

//2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable, console.log each of them.
const businessLamp = document.getElementsByClassName( 'big' ); 
console.log( businessLamp );

const businessLamp2 = document.querySelectorAll( '.big' );
console.log(businessLamp2);

// 3. store 'The King' and 'The Conceited Man' in the 'conceitedKing' variable alert them one by one.
const conceitedKing = document.getElementsByClassName('container');
console.log(conceitedKing);
console.log( conceitedKing[ 0 ].children[ 0 ] );
console.log( conceitedKing[ 0 ].children[ 1 ] );

const conceitedKing2 = document.querySelector('.container');
console.log(conceitedKing);
console.log(conceitedKing2.children[0]);
console.log(conceitedKing2.children[1]);

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter' in the 'noBusiness' variable. console.log each of them.
const noBusiness = document.getElementsByTagName('div');
console.log( noBusiness[0] );
console.log( noBusiness[1] );
console.log( noBusiness[ 2 ] );

const noBusiness2 = document.querySelectorAll( 'div' );
console.log(noBusiness2[0]);
console.log(noBusiness2[1]);
console.log(noBusiness2[2]);