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
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
} );

app.get('/', ( req, res ) => {
  res.sendFile( __dirname + '/public/index.html' );
})

app.post('/api/links', (req, res) => {
  conn.query(`SELECT * from aliases WHERE alias = (?)`, [req.body.alias], (err,rows)=>{
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (rows.length === 0) {
      let secretCode = Math.floor(1000 + Math.random() * 9000);
      conn.query(`INSERT INTO aliases (url,alias,secretCode) VALUES (?,?,?)`, [req.body.url, req.body.alias, secretCode], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({ 'error': 'database error' });
          return;
        }
        conn.query(`SELECT * FROM aliases WHERE alias = (?)`, [ req.body.alias ], (err, rows) => {
          if (err) {
          console.log(err.toString());
          res.status(500).json({ 'error': 'database error' });
          return;
          }
          res.json(rows);
        })
      })
    } else {
      res.status(400).send('nopost');
    }
  })
})

app.get('/a/:alias', (req, res) => {
  conn.query(`UPDATE aliases SET hitCount = hitCount + 1 WHERE alias =(?)`,[req.params.alias], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (rows.affectedRows === 0) {
      res.status(404);
    } else {
    conn.query(`SELECT url FROM aliases WHERE alias = (?) `, [ req.params.alias ], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ 'error': 'database error' });
        return;
      }
      res.redirect(`${rows[0].url}`)
    });
    }
  })
})

app.get('/api/links', (req, res) => {
  conn.query(`SELECT id,url,alias,hitCount FROM aliases`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    res.json(rows)
  })
})

app.delete('/api/links/:id', (req, res) => {
  conn.query(`SELECT * FROM aliases WHERE id = (?)`, [ req.params.id ], (err,rows)=> {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (rows.length === 0){
      res.status(404).send('no such id')
    } else if (rows[ 0 ].secretCode !== req.body.secretCode) {
      res.status(403).send('does not match')
    } else {
      conn.query(`DELETE FROM aliases WHERE id = (?)`, [ req.params.id ], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({ 'error': 'database error' });
          return;
        }
        res.status(204).send('ok')
      })
    }
  })
})

app.listen(PORT, () => {
  console.log('Listening to port 3000');
});