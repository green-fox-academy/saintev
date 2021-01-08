'use strict';

const button = document.querySelector( 'button' );

let images = [
  './images/jellyfish.jpg',
  './images/mother.jpg',
  './images/bird.jpg'
]

let imgUrl = document.querySelector( '#bigpicture' );

button.onclick = () => {
  
  imgUrl.setAttribute( 'src', images[ 1 ] );
}