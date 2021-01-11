'use strict'

const test = require( 'tape' );
const numberConverter = require( './number-converter.js' );


test( 'function should convert number to string', t => {

  const number = 5;
  const actual = numberConverter( number );
  const expected = 'five'
} );