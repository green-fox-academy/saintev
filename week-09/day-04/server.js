'use strict'

const express = require( 'express' );
const mysql = require( 'mysql' );
const app = express();
app.use( express.json() );
app.use( express.static( 'public' ) );
app.use(express.urlencoded({ extended: true }));//ha csak siman html-formot hasznalunk, mert nem json-ben kuldi az adatot a req.bodyban
const PORT = 3000;

const conn = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ocean',
  insecureAuth: 'true',
} );

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
} );

app.get( '/', ( req, res ) => {
  res.sendFile( __dirname + '/public/index.html' );
  //res.sendFile(path.join('index.html'));
})
  
app.get('/hello', (req, res) => {
  res.send(`Hello World!`);
});

app.get( '/addpost', ( req, res ) => {
  res.sendFile( __dirname + '/public/post.html' );
} )

app.get( '/posts', ( req, res ) => {
  conn.query( 'SELECT *, TIMESTAMPDIFF(HOUR,TIMESTAMP,NOW())result FROM posts ORDER BY timestamp DESC;', ( err, rows ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.status( 200 ).json( rows );
  } );
} );

app.post( '/posts', ( req, res ) => {
  conn.query( `INSERT INTO posts (title,url) VALUES(?,?)`, [ req.body.title, req.body.url ], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (req.body.title && req.body.url) {
      res.redirect('/');
    } else {
      res.send('Please provide a title and a valid url!')
      return;
    }
  });
} );

app.put('/posts/:id/upvote', (req,res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = (?)`, [ req.params.id ], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    res.status(200).json(rows);
  });
});

app.put( '/posts/:id/downvote', ( req, res ) => {
  conn.query( `UPDATE posts SET score = score - 1 WHERE id = (?)` ,[ req.params.id ], ( err,rows ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.status( 200 ).json(rows);
  } );
} );

app.delete( '/posts/:id', ( req, res ) => {
  conn.query( `DELETE FROM posts WHERE id = (?)`, [ req.params.id ], ( err ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
      return;
    }
    res.status( 200 ); // fetch will not allow redirect, 404 not found
  } );
} );

app.put( '/posts/:id', ( req, res ) => {
  conn.query( `UPDATE posts SET title = (?), url = (?) WHERE id = (?)`, [req.body.title, req.body.url, req.params.id], ( err, rows ) => {
    if ( err ) {
      console.log( err.toString() );
      res.status( 500 ).json( { 'error': 'database error' } );
    }
    res.status( 200 ).json( rows );
  } );
} );

app.listen( PORT, () => {
  console.log('Listening to port 3000');
  } );