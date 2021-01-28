'use strict';

window.onload = () =>{

  fetch( 'http://localhost:3000/posts' )
    .then( response => {
      if ( response.status !== 200 ) {
        throw new Error( 'no response' )
      }
      return response
    } )
    .then( response => response.json() )
    .then( response => response.forEach( post => { addPost( post ) }))
    
    //.catch( err => {
    //  console.log('something went wrong');
    //} )

    .finally( console.log( 'end' ) );
};

function addPost ( post ) {
  const ul = document.querySelector( 'ul' );

  const li = document.createElement( 'li' );

  const vote = document.createElement( 'div' );
  vote.setAttribute( 'class', 'vote' );

  const thumbsup = document.createElement( 'i' )
  thumbsup.classList.add( 'far', 'fa-thumbs-up' )//?
  vote.appendChild( thumbsup );

  const score = document.createElement( 'div' )
  score.setAttribute( 'class', 'score' );
  score.innerHTML = `${ post.score }`;
  vote.appendChild( score );

  const thumbsdown = document.createElement( 'i' )
  thumbsdown.setAttribute( 'class', 'far fa-thumbs-down' )
  vote.appendChild( thumbsdown );

  const title = document.createElement( 'a' );
  title.setAttribute( 'href', `${ post.url }` );
  title.setAttribute( 'class', 'title' );
  title.innerHTML = `${ post.title }`;
  li.appendChild( title );

  const timestamp = document.createElement( 'div' )
  timestamp.setAttribute( 'class', 'timestamp' )
  timestamp.innerHTML = `${ post.timestamp }`
  li.appendChild( timestamp );

  const change = document.createElement( 'div' );
  change.setAttribute( 'class', 'change' );

  const modify = document.createElement( 'button' );
  modify.setAttribute( 'class', 'modify' );
  modify.innerHTML = 'Modify';
  change.appendChild( modify );
  const remove = document.createElement( 'button' );
  remove.setAttribute( 'class', 'remove' )
  remove.innerHTML = 'Remove';
  change.appendChild( remove );
  li.appendChild( change );

  li.appendChild( vote );
  ul.appendChild( li );
}

//navigate to post site
const postButton = document.querySelector( '.submit' );
postButton.addEventListener( 'click', ( event => {
  location.href( 'http://localhost:3000/posts' );//???
} ) )

//post.html
const button = document.querySelector( 'button' );
button.addEventListener( 'click', ( event ) => {
  fetch
} )
