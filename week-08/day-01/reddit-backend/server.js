'use strict'

const express = require( 'express' );
const mysql = require( 'mysql' );
const app = express();
app.use( express.json());
app.use( express.static( 'public' ) );//a public mappabol behuzza majd a htmlt a css es js -el egyutt
const PORT = 3000;

//const conn = mysql.createConnection( {
//  host: 'localhost',
//  user: 'root',
//  password: 'password',
//  database: '',
//  insecureAuth: 'true',
//} );

//conn.connect( ( err ) => {
//  if ( err ) {
//    console.log(err.toString());
//  }
//  console.log('Connected to mysql');
//} )
//
app.get( '/', ( req,res ) => {
  res.send(`Hello World!`);
  //res.sendFile('index.html')
} );

app.get( '/posts', ( req, res ) => {
  res.status(200).json
} )

app.listen( PORT, () => {
  console.log('Listening to port 3000');
  } );