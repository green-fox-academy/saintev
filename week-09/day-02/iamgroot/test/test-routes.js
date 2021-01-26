'use strict';

const test = require('tape');
const request = require('supertest');
const app = require( '../routes' );
const { expect } = require( 'chai' );
​
describe('groot endpoint', () => {
  it( 'POST /groot should return ok status if parameter was given', () => {
    request(app)
      .post( '/groot' )
      .send({message:'Get out of the way!'})
      .expect( 200 )
      .end( ( err, res ) => {
        expect( err ).to.be.null; 
        expect( res.body.message ).to.equal( 'Get out of the way!' );
    } )
  } ) 
});

describe('groot endpoint', () => {
  it( 'POST /groot should return 500 status and message: `I am groot` if no parameter was given', () => {
    request(app)
      .post( '/groot' )
      .send({message:''})
      .expect( 500 )
      .end( ( err, res ) => {
        expect( err ).to.be.null; 
        expect( res.body.error ).to.equal( 'I am Groot!' );
    } )
  } ) 
});

//With giving a parameter the status is ok,
//and the given response is the same as expected
//Without giving a parameter the status is not ok,
//and the given error response is the same as expected