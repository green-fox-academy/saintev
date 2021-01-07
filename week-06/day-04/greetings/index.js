//When a user visits our /?name={name} route, greet them on their name.
//for /?name=John route, render this: Welcome back, John!
//When a user visits the base route (/) without a given name, render this page:
//for /, render this: Welcome back, Guest
  
const express = require( 'express' );
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  let name = req.query.name;
  if (name == undefined) {
    res.render('home', {name: 'Guest'});
  } else {
    res.render('home', {name: name});
  }
});

app.listen( PORT, () => {
    console.log( `Listening on port ${ PORT }` );
  } );