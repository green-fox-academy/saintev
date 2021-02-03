'use strict';

window.onload = () => {
  
  fetch( 'http://localhost:3000/posts' )
    .then( response => {
      if ( response.status !== 200 ) {
        throw new Error( 'no response' )
      }
      return response
    } )
    .then(response => response.json())
    .then(response => response.forEach( post => { addPost( post ) }))
    
    //.catch( err => {
    //  console.log('something went wrong');
    //} )

    .finally( console.log( 'end' ) );
};

function addPost ( post ) {
  const ul = document.querySelector( 'ul' );

  const li = document.createElement('li');

  const vote = document.createElement( 'div' );
  vote.setAttribute( 'class', 'vote' );

  const thumbsup = document.createElement( 'i' )
  thumbsup.classList.add( 'far', 'fa-thumbs-up' )//?
  thumbsup.setAttribute('id', `${ post.id }`);
  vote.appendChild( thumbsup );

  const score = document.createElement( 'div' )
  score.setAttribute( 'class', 'score' );
  score.innerHTML = `${ post.score }`;
  vote.appendChild( score );

  const thumbsdown = document.createElement( 'i' )
  thumbsdown.setAttribute( 'class', 'far fa-thumbs-down' )
  thumbsdown.setAttribute('id', `${ post.id }`);
  vote.appendChild(thumbsdown);

  const title = document.createElement( 'a' );
  title.setAttribute( 'href', `${ post.url }` );
  title.setAttribute( 'class', 'title' );
  title.innerHTML = `${ post.title }`;
  li.appendChild( title );

  const timestamp = document.createElement( 'div' )
  timestamp.setAttribute('class', 'timestamp')
  const timeElapsed = post.result;
  let days = Math.floor(timeElapsed / 24);
  let hours = timeElapsed % 24;
  if (days === 0) {
    if (hours === 1) {
    timestamp.innerHTML=`Posted 1 hour ago`
    }
  timestamp.innerHTML=`Posted ${hours} hours ago`  
  } else {
    if (days === 1) {
    timestamp.innerHTML=`Posted 1 day ago`
    } else {
  timestamp.innerHTML=`Posted ${days} days ago` 
    }
  }
  li.appendChild( timestamp );

  const change = document.createElement( 'div' );
  change.setAttribute( 'class', 'change' );

  const modify = document.createElement( 'button' );
  modify.setAttribute( 'class', 'modify' );
  modify.innerHTML = 'Modify';
  change.appendChild( modify );
  const remove = document.createElement( 'button' );
  remove.setAttribute('type','submit')
  remove.setAttribute( 'class', 'remove' )
  remove.setAttribute('id', `${post.id}`)
  remove.innerHTML = 'Remove';
  change.appendChild( remove );
  li.appendChild( change );

  li.appendChild( vote );
  ul.appendChild( li );
}

//navigate to post site
const postButton = document.querySelector( '.submit' );
postButton.addEventListener( 'click', ( event )=> {
  window.location.assign( 'http://localhost:3000/addpost' ) //redirect 
} );
  

//delete, upvote, downvote
const posts = document.getElementById(`posts`);

posts.addEventListener('click', (event) => {
  const id = event.target.getAttribute('id');
  const action = event.target.getAttribute('class');
  console.log(action);
  
  if (action === 'remove') {
    const removeButton = document.getElementById(`${ id }`);
    fetch(`http://localhost:3000/posts/${ id }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const change = removeButton.parentElement;
    const li = change.parentElement;
    posts.removeChild(li);

  } else if (action === 'far fa-thumbs-up') {
    const score = event.target.nextSibling;
    console.log(score);
    fetch(`http://localhost:3000/posts/${ id }/upvote`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    score.innerHTML++;
  
  } else if (action === 'far fa-thumbs-down') {
    const score = event.target.previousSibling;
    console.log(score);
    fetch(`http://localhost:3000/posts/${ id }/downvote`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    })
    score.innerHTML--;
  }
});


 