'use strict';

const express = require('express');
const app = express();

app.use( express.json() );
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('Mukodik a szerver');
} );

app.listen( PORT, () => {
    console.log( `The server is running on port ${ PORT }` );
  } );

