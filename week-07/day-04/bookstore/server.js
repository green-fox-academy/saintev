'use strict';

const express = require('express');
const app = express();
const mysql = require( 'mysql' );
app.use( express.json() );

let conn = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
} );

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
} );

app.get('/', (req,res) => {
  res.send('Mukodik a szerver');
} );

app.get( '/booktitle', ( req, res ) => {
  conn.query( 'SELECT book_name FROM book_mast;', ( err, rows ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.json( rows );
  } );
} );

app.get( '/allbookinfo', ( req, res ) => {
  
  let mainQuery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast 
 JOIN author ON book_mast.aut_id = author.aut_id 
 JOIN category ON book_mast.cate_id = category.cate_id
 JOIN publisher ON book_mast.pub_id = publisher.pub_id`
  
  let searchWords = [];
  
  if ( req.query.category ) {
    mainQuery += ` WHERE cate_descrip = (?)`
    searchWords.push( req.query.category );
  };

  if ( req.query.publisher ) {
    if ( req.query.category && req.query.publisher ) {
    mainQuery += ` AND pub_name = (?)`
    } else {
    mainQuery += ` WHERE pub_name = (?)`
    }
    searchWords.push( req.query.publisher );
  }
  
  if ( req.query.plt ) {
    if ( req.query.category || req.query.publisher ) {
    mainQuery += ` AND book_price < (?)`
    } else {
    mainQuery += ` WHERE book_price < (?)`
    }
    searchWords.push(req.query.plt)
  }
    
  if ( req.query.pgt ) {
    if ( req.query.category || req.query.publisher || req.query.plt ) {
    mainQuery += ` AND book_price > (?)` 
    } else {
    mainQuery += ` WHERE book_price > (?)`
    }
    searchWords.push( req.query.pgt );
  }
   
   conn.query( mainQuery , searchWords , ( err, rows ) => { 
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.json( rows );
  } );
  
} );

app.listen(3000);
