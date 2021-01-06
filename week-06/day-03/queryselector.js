'use strict';

//1. store the element that says 'The King' in the 'king' variable. console.log it.

console.log(window);
console.log( document );
const king = document.getElementById( 'b325' );
console.log( king );

//2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable, console.log each of them.
const businessLamp = document.getElementsByClassName( 'asteroid big' ); // ez kiadta az 'asteroid b329 big'-et is
console.log(businessLamp);

// 3. store 'The King' and 'The Conceited Man' in the 'conceitedKing' variable alert them one by one.
const conceitedKing = document.getElementsByClassName( 'container' );
console.log( conceitedKing[ 0 ].children[ 0 ] );
console.log(conceitedKing[0].children[1]);

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter' in the 'noBusiness' variable. console.log each of them.
const noBusiness = document.getElementsByTagName('div');
console.log( noBusiness[0] );
console.log( noBusiness[1] );
console.log( noBusiness[2] );