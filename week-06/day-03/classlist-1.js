'use strict';

//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
const paragraph = document.querySelectorAll( 'p' );
console.log( paragraph[ 3 ] );
if ( paragraph[ 3 ].classList.contains( 'dolphin' )){
  paragraph[ 0 ].innerText = 'pear';
};

//If the first p has an 'apple' class, replace cat's content with 'dog'
if ( paragraph[ 0 ].classList.contains( 'apple' ) ) {
  paragraph[ 2 ].innerText = 'dog';
}
//Make apple red by adding a .red class
//Make balloon less balloon-like (change its shape)