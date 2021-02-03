'use strict'

window.onload = () => {
  fetch('http://localhost:3000/bookinfo')
    .then(response => response.json())
    //.then(response =>console.log(response))
    .then(response => response.forEach(title => { addTitle(title) }))
}

function addTitle(title) {
  const tableBody = document.querySelector('tbody')
  
  const tablerow = document.createElement('tr');
  tableBody.appendChild(tablerow);

  const bookTitle = document.createElement('td');
  bookTitle.innerHTML = `${ title.book_name }`
  tablerow.appendChild(bookTitle);
  const authorName = document.createElement('td');
  authorName.innerHTML = `${title.aut_name}`
  tablerow.appendChild(authorName);
  const category = document.createElement('td');
  category.innerHTML = `${title.cate_descrip}`;
  tablerow.appendChild(category)
  const publisher = document.createElement('td');
  publisher.innerHTML = `${ title.pub_name }`
  tablerow.appendChild(publisher)
  const price = document.createElement('td');
  price.setAttribute('data-currency', 'usd');
  price.innerHTML = `${ title.book_price }`;
  tablerow.appendChild(price);
  

}