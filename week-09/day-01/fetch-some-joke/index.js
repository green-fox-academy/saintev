'use strict';

let button = document.querySelector( 'button' );
const jokeList = document.querySelector( '.container' );
button.addEventListener( 'click', ( event ) => {

  fetch( 'http://api.icndb.com/jokes/random' )
   //,method: 'GET',        //http method
   // headers: {            //headerek
   //     'Content-Type': 'application/json'
   // },
   //// body: JSON.stringify({a:1,b:2}) ///body nem GET keres eseten

  .then( response => {
    if ( response.status !== 200 ) {
      throw new Error( 'nincs valasz' )
    }
    return response; //megkapjuk a response Objectet
  } )
  .then( response => response.json() )
    .then( response => ( response.value.joke ) )
  .then( response => addJokeToList( response )  )
  
  .catch( err => {
    console.log( 'valami nem ok' );
  } )
  .finally( () => {
    console.log('itt a vege ');} )
} )

function addJokeToList ( joke ) {
  const newJoke = document.createElement( 'p' );
  newJoke.innerHTML = `${ joke }`;
  jokeList.appendChild(newJoke)
}