'use strict';

let form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetch( 'http://localhost:3000/api/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
      url: form.url.value,
      alias: form.alias.value
      } )
  })
    .then(response => {
      if (response.status === 400) {
        let main = document.querySelector('.message')
        let textBox = document.createElement('p'); //igy sokszor ki fogja irni, ha van egy p a html-ben 
        textBox.innerHTML = `<span style = red> Your alias is already in use!</span>`;
        main.appendChild(textBox);
        throw Error ('alias in use')
      } return response;
    })
    .then(response => response.json())
    .then(response => response[0].secretCode)
    .then(response => writeMyMessage(response))
    //.then(response => console.log(response))
    .catch((err) => {
    console.log('an error occurred');
    })
  function writeMyMessage(code){
  let messageBox = document.querySelector('.message');
    messageBox.innerHTML = `<strong>Your alias is ${ form.alias.value } and your secret code is ${ code }</strong>`;
    document.getElementById('url').value = '';
    document.getElementById('alias').value = '';
  }
} );
