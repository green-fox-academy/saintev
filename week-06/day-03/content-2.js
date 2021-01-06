//1) replace the list items' content with items from this list:
//     ['apple', 'banana', 'cat', 'dog']

let newItems = document.querySelectorAll( 'li' );
//console.log(newItems);
let newArray = [ 'apple', 'banana', 'cat', 'dog' ];

for ( i = 0; i < newItems.length; i++ ) {
  newItems[ i ].innerText = newArray[ i ]; 
}
console.log(newItems);

//2) change the <ul> element's background color to 'limegreen'
//use css class to change the color instead of the style property