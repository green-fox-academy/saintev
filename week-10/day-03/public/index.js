'use strict';

window.onload = () => {

  fetch('http://localhost:3000/listall')
    .then(response => response.json())
    //.then(response =>console.log(response))
    .then(response => response.forEach(title => { addTitle(title) }))
    
  
  function addTitle(title) {
    const booklist = document.querySelector('.booktitles');
    const booktitle = document.createElement('p');
    booktitle.innerHTML = `${ title.book_name }`
    booklist.appendChild(booktitle);

  }


}
