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

  const vote = document.createElement( 'class');
  vote.setAttribute( 'vote' );

  const thumbsup = document.createElement('i')
  thumbsup.classList.add('far fa-thumbs-up' ) //?
  vote.appendChild( thumbsup );

  const score = document.createAttribute( 'class', 'score' )
  score.innerHTML = `${ post.score }`;
  vote.appendChild( score );

  const thumbsdown = document.createElement('i')
  thumbsdown.classList.add( 'class')
  vote.appendChild( thumbsdown );

  const title = document.createElement( 'a' );
  title.setAttribute( 'href', `${ post.url }` );
  title.classList.add( 'title' );
  title.innerHTML = `${ post.title }`;
  li.appendChild( title );
  

  li.appendChild( vote );
  ul.appendChild( li );
  
  
  
  
  
  
  
  ul.appendChild( newLi );






}