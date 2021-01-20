'use strict'

const pet = document.querySelector( '#pet' );
const catfacts = document.querySelector( '#catfacts' );

const signUp = document.getElementById( 'signup' );
const loveCats = document.getElementById( 'lovecats' );

  const goldfish = document.getElementById( 'goldfish' );
  const no = document.getElementById( 'no' );
pet.addEventListener( 'click', () => {
  const dog = document.getElementById( 'dog' ); //itt az a value hogy be van-e jelolve, ezt automatikusan kiveszi a radio button
  const cat = document.getElementById( 'cat' );

  if ( cat.checked || dog.checked ) {
    signUp.disabled = false;
    //signUp.setAttribute( disabled, 'active' );
  } else if ( goldfish.checked ) {
    signUp.disabled = true;
  }
} );

catfacts.addEventListener( 'click', () => {
  const yes = document.getElementById( 'yes' );

  if ( yes.checked ) {
    loveCats.disabled = false;
  } else if ( no.checked && goldfish.checked) {
    signUp.disabled = false;
  } else if (no.checked && !goldfish.checked){
    loveCats.disabled = true;
  };
} );

signUp.addEventListener( 'click', () => {
  if ( no.checked && goldfish.checked ) {
  alert ('Sigh, we still added you to the cat facts checklist')
  } else {
  alert( 'Thank you, you have successfully signed up for cat facts!' );
  }
} );

loveCats.onclick = () => {
  alert( 'Thank you, you have successfully signed up for cat facts!' );
} 
  
  