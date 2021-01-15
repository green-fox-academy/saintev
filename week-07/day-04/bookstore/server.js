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

  let bookCategory = ' '
  if ( req.query.category ) {
    bookCategory = req.query.category;
    console.log( bookCategory );
    mainQuery += ` WHERE cate_descrip = (?)`
    searchWords.push( bookCategory );
  };

  let bookPublisher = ' '; 
  if ( req.query.publisher ) {
    bookPublisher = req.query.publisher;
    mainQuery += ` AND pub_name = (?);`
    searchWords.push( bookPublisher );
  }
  
  let plt = 2000;
  if ( req.query.plt ) {
    plt = req.query.plt;
    mainQuery += `WHERE book_price < 2000;`
    
  }
    
  let pgt = 0;
  if ( req.query.pgt ) {
  pgt = req.query.pgt;
  }
   
 //& book_price < (?)
 //& book_price > (?);

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
