'use strict';

//Write the image's url to the console.
const imgUrl = document.querySelector( 'img' );
console.log(imgUrl);
console.log( imgUrl.getAttribute( 'src' ) );

//Replace the image with a picture of your favorite animal.
imgUrl.setAttribute('src', 'https://www.thesprucepets.com/thmb/nqnDtls5cg5WVhKoiay63KXOVtc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/front-view-closeup-of-black-and-white-spotted-piglet-on-hay-on-a-sunny-day-881477548-5c8ba7b746e0fb000187a286.jpg');

//Make the link point to the Green Fox Academy website.
let website = document.querySelector( 'a' );
website.setAttribute( 'href', 'https://www.greenfoxacademy.com/' );

//Disable the second button.
const secondButton = document.querySelector( '.this-one' );
//secondButton.remove();
secondButton.disable = true;

//Replace its text with 'Don't click me!'
secondButton.innerText = `Don't click me!`;
