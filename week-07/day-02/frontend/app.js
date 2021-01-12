'use strict';

const express = require( 'express' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );

const app = express();
const PORT = 3000;

app.use( express.static( 'assets' ) );
app.use( bodyParser.json() );

app.get( '/', ( req, res ) => {
  res.sendFile(path.join(__dirname, 'index.html'));
} );

app.get( '/doubling', ( req, res ) => {
  let input = req.query.input;
  if ( input === undefined ) {
    res.status( 200 ).json( { "error": "Please provide an input!" } );
  } else {
    res.json( { "received": Number( req.query.input ), "result": Number( req.query.input * 2 ) } )
  }
} );

app.get( '/greeter', ( req, res ) => {
  if ( !req.query.title && !req.query.name ) {
  res.status( 400 ).json( { "error": "Please provide a name and a title!" } );
  }else if ( !req.query.name ) {
    res.status( 400 ).json( { "error": "Please provide a name!" } );
  } else if ( !req.query.title ) {
    res.status( 400 ).json( { "error": "Please provide a title!" } );
  } else {
    res.json( { "welcome_message": `Oh, hi there ${ req.query.name }, my dear ${ req.query.title }!` } );
  }
});

app.get( '/appenda/:word', ( req, res ) => {
  res.json( { "appended": `${ req.params.word }a` } );
  } );

app.post( '/dountil/sum/:action', ( req, res ) => { //ez az egesz nem mukodik 
  let action = req.params.action;
  let number = req.body.until;

  if ( number === undefined ) {
    res.status( 200 ).json( { "error": "Please provide a number!" } );

  } else if ( action === 'sum' ) {
    let sum = 0;
    for ( let i = 1; i <= number; i++ ) {
      sum += i;
    }
    res.send( { //a sendet is atalakitja az express .json-ne ha object
      "until": sum
    } );

  } else if ( action === 'factor' ) {
    let factor = 1;
    for ( let i = 1; i <= number; i++ ) {
      factor = i * factor;
    }
    res.json( {
      "until": Number( factor )
    } )
  }
} );



app.listen( PORT, () => {
    console.log( `The server is running on port ${ PORT }` );
  } );