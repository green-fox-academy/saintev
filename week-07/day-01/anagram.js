'use strict';

const { join } = require( "path" );


function isAnagram ( stringA, stringB ) {
  
  if ( stringA === undefined || stringB === undefined ) {
    return 'one of the input is empty';
  }

  let smallStringA = stringA.toLowerCase();
  let smallStringB = stringB.toLowerCase();
  let splitStringA = smallStringA.split('');
  let splitStringB = smallStringB.split( '' );
  if ( splitStringA.length != splitStringB.length ) {
    return false;

  } else if ( smallStringA === smallStringB ) {
    return true;
  } else if ( splitStringA.sort().join( '' ) === splitStringB.sort().join( '' )) {
    return true;
  }

}
module.exports = isAnagram;

//Create a function that takes two strings, and returns a boolean that should be True if the strings are anagrams and False otherwise.

