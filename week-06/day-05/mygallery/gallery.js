'use strict';

const button = document.querySelector( 'button' );
const counter = document.querySelector( '.counter' );


//let images = [
//  './images/jellyfish.jpg',
//  './images/mother.jpg',
//  './images/bird.jpg'
//]

let imgUrl = document.querySelector( '#bigpicture' );

button.onclick = () => {
  
  imgUrl.setAttribute('src', './images/mother.jpg')  
}