const express = require( 'express' );
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


app.get('/', (req,res) => {
  let todos = [ 'get up', 'survive', 'go back to bed' ];
  res.render( 'home', { todos: todos });
})

app.listen( PORT, () => {
    console.log( `Listening on port ${ PORT }` );
  } );