'use strict';

let submitButton = document.querySelector('button');
console.log(submitButton);
submitButton.addEventListener('click', (event) => {
  fetch( 'http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
      title: form.url.value,
      url: form.alias.value
      } )
  })
  .then (response => console.log(response))
} );
