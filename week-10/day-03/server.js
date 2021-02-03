'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  //insecureAuth: 'true',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
} );

app.get( '/', ( req, res ) => {
  res.sendFile( __dirname + '/public/index.html' );
  //res.sendFile(path.join('index.html'));
})

app.get('/listall', (req, res) => {
  conn.query('SELECT book_name FROM book_mast', (err, rows)=> {
    if (err) {
        console.log(err.toString());
        res.status(500).json({ 'error': 'database error' });
        return;
    }
    res.send(rows);
  } );
} );

app.get('/allbookinfo', (req, res) => {
  res.sendFile(__dirname + '/public/filtered.html');
})

app.get('/bookinfo', (req, res) => {
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast
    JOIN author ON book_mast.aut_id = author.aut_id 
    JOIN category ON book_mast.cate_id = category.cate_id
    JOIN publisher ON book_mast.pub_id = publisher.pub_id`, (err, rows) => {

      if (err) {
        console.log(err.toString());
        res.status(500).json({ 'error': 'database error' });
        return;
      }
      //res.sendFile(__dirname + '/public/filtered.html');
      res.send(rows);
    })
})








app.listen(PORT, () => {
  console.log('Listening to port 3000');
});