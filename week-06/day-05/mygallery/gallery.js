'use strict';

const right = document.querySelector( 'button' );

let images = [
  './images/jellyfish.jpg',
  './images/mother.jpg',
  './images/bird.jpg'
]

let imgUrl = document.querySelector( 'bigpicture' );

right.onclick = () => {
  imgUrl.setAttribute('src', './images/mother.jpg');
}