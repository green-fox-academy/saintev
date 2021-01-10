'use strict';

const rightButton = document.querySelector( '.right' );
const leftButton = document.querySelector( '.left' );

let images = [
  './images/jellyfish.jpg',
  './images/mother.jpg',
  './images/seals.jpg',
  './images/owl.jpg',
  './images/arcticfox.jpg',
  './images/piglets.jpg',
  './images/orca.jpg',
  './images/bird.jpg',
  './images/sheep.jpg',

]

let text = [
  '',
  '',
  '',
  'Seals enjoying the sunshine and each other on the beach in the Galapagos Islands.',
  'Pikva, Harju County, Estonia',
  'Thórsmörk, Iceland',
  'Cute wild boars in Budakeszi, Hungary',
  `Juan de Fuca, BC, Canada {/n} This Orca is doing the LOOKY-LOO`,

]

let gallery = {
    1 : {
    url: './images/jellyfish.jpg',
    title: 'Jellyfish',
    text: `Melbourne, Australia
    These jellyfish had an ethereal like presence, floating effortlessly to the rhythm of the glowing lights and humming tank`
  },
  
    2: {
    url: './images/mother.jpg',
    title: 'Mother and baby monkey',
    text: 'True love',
  },

    3 :{
    url: './images/seals.jpg',
    title: 'Seals',
    text: 'Seals enjoying the sunshine and each other on the beach in the Galapagos Islands.',
  }
}

let imgUrl = document.querySelector( '#bigpicture' );

let i = 0;
rightButton.onclick = () => {
  i++;
  if ( i >= images.length ) {
  i = 0}
  imgUrl.setAttribute( 'src', images[ i ] );
}

let j = 0;
leftButton.onclick = () => {
  i--;
  if ( i < 0 ) {
    i = images.length-1;}
  imgUrl.setAttribute( 'src', images[ i ] );
}