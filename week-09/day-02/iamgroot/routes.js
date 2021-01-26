const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  res.send('I am Groot!')
});

app.post( '/groot', ( req, res ) => {
  
  if ( req.query.message ) {
    res.status( 200 ).json( { 'Message': req.query.message, "translated": "I am Groot!"})
  } else {
    res.status(500).json( { 'Error': 'I am Groot!' })
  }
  
} )

    

module.exports = app;