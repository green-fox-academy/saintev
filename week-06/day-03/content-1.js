'use strict';

console.log( window );
console.log( document );

//Append every paragraph with the last one's content.
let paragraph = document.querySelectorAll( 'p' );

//console.log( paragraph[0] );
//paragraph[ 1 ].innerText = paragraph[ 0 ].innerText;
//paragraph[ 2 ].innerText = paragraph[ 0 ].innerText + paragraph[1].innerText;

for ( let i = 1; i < paragraph.length; i++ ) {
  paragraph[ i ].innerText = paragraph[ i - 1 ].innerText + ' ' + paragraph[i].innerText; 
}
console.log(paragraph);

//Do the same again, but you should keep the cat strong.
// az elso megoldast ki kell commentelni hogy ez mukodjon

let paragraph2 = document.querySelectorAll( 'p' );

for ( let i = 1; i < paragraph2.length; i++ ) {
  paragraph2[ i ].innerHTML = paragraph2[ i - 1 ].innerHTML + ' ' + paragraph2[ i ].innerHTML;
}
console.log(paragraph2);