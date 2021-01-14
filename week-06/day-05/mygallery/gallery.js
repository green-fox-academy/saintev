'use strict';


let images = [
  './images/jellyfish.jpg',
  './images/mother.jpg',
  './images/seals.jpg',
  './images/owl.jpg',
  './images/arcticfox.jpg',
  './images/piglets.jpg',
  './images/orca.jpg',
  './images/sheep.jpg',
]

let myLocation = [
  'Melbourne, Australia',
  'Bali, Indonesia',
  'Galapagos Islands',
  'Oro Verde, Argentina',
  'Pikva, Estonia',
  'Budakeszi, Hungary',
  'Juan de Fuca, Canada',
  'Killarney, Ireland',
]

let myText = [
  'Jellyfish are floating around peacefully',
  'True love',
  'Seals enjoying the sunshine and each other',
  'This owl has found the greatest vantage point',
  'I see you',
  'Cute wild boars',
  `This Orca is doing the LOOKY-LOO`,
  'This is the only 16:9 picture',
]

//should change the 3 arrays to 1 object later
let gallery = {
    1 : {
    url: './images/jellyfish.jpg',
    title: 'Melbourne, Australia',
    text: `These jellyfish had an ethereal like presence, floating effortlessly to the rhythm of the glowing lights and humming tank`
  },
  
    2: {
    url: './images/mother.jpg',
    title: 'Mother and baby monkey',
    text: 'True love',
  },

    3 :{
    url: './images/seals.jpg',
    title: 'Galapagos Islands',
    text: 'Seals enjoying the sunshine and each other',
  }
}

const rightButton = document.querySelector( '.right' );
const leftButton = document.querySelector( '.left' );

let imgUrl = document.querySelector( '#bigpicture' );
let transbox = document.querySelector( '.transbox' );
let pictureLocation = transbox.querySelector( '.location' );
let newText = transbox.querySelector( '.description' );

let i = 0;
// it should start from the current image not 0. order is messed up if clicked on thumbnails.
//let i = images.indexOf(imgUrl);
rightButton.onclick = () => {
  ///let i = images.indexOf( imgUrl.querySelector('src'));
  i++;
  if ( i >= images.length ) {
  i = 0}
  imgUrl.setAttribute( 'src', images[ i ] );
  pictureLocation.innerHTML = myLocation[ i ];
  newText.innerHTML = myText[ i ];
}

let j = 0;
leftButton.onclick = () => {
  i--;
  if ( i < 0 ) {
  i = images.length-1;}
  imgUrl.setAttribute( 'src', images[ i ] );
  pictureLocation.innerHTML = myLocation[ i ];
  newText.innerHTML = myText[ i ];
}

const thumbnails = document.querySelector( '.thumbnails' );
const secondThumbnail = thumbnails.querySelector( '.one' );
secondThumbnail.onclick = () => {
  imgUrl.setAttribute( 'src', images[ 1 ] );
  pictureLocation.innerHTML = myLocation[ 1 ];
  newText.innerHTML = myText[ 1 ];
} // need to do this in a loop not one by one


for ( let n = 0; n < thumbnails.length; n++ ){
  placeOfThumbnail = thumbnails.querySelector( '#' + 'n' );
  thumbnails[n].onclick = () => {
    imgUrl.setAttribute( 'src', images[ n ] );
}


} 
