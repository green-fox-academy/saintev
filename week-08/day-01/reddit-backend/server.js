'use strict'

const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require( 'constants' );
const express = require( 'express' );
const mysql = require( 'mysql' );
const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.static( 'public' ) );//a public mappabol behuzza majd a htmlt a css es js -el egyutt
const PORT = 3000;

const conn = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  insecureAuth: 'true',
} );

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
} );

app.get( '/hello', ( req,res ) => {
  res.send(`Hello World!`);
  //res.sendFile('index.html')
} );

app.get( '/posts', ( req, res ) => {
  conn.query( 'SELECT * FROM posts;', ( err, rows ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.status( 200 ).json( rows );
  } );
} );

app.post( '/posts', ( req, res ) => {
  conn.query( `INSERT INTO posts (title,url)
  VALUES(?,?)`, [ req.body.title, req.body.url ], ( err, rows ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    if ( req.body.title && req.body.url ) {
      res.send( 'Ok!post added!' );
      res.json( rows );
      //res.redirect( '/' );
    } else
        res.send('Please provide a title and a valid url!')
      return;
    } );
} );

app.put( '/posts/:id/upvote', ( req, res ) => {
  conn.query( `UPDATE posts SET score = score + 1 WHERE id = ${ req.params.id }`, ( err ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.status( 200 ).json('ok' );
  } );
} );

app.put( '/posts/:id/downvote', ( req, res ) => {
  conn.query( `UPDATE posts SET score = score - 1 WHERE id = ${ req.params.id }`, ( err ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.status( 200 ).json('ok' );
  } );
} );


  


app.listen( PORT, () => {
  console.log('Listening to port 3000');
  } );