'use strict';

let sectionElement = document.querySelector( 'section' );

for ( let i = 0; i <= 100; i++ ){

let newDiv = document.createElement( 'div' );
sectionElement.appendChild( newDiv );
newDiv.innerHTML = i;
}

