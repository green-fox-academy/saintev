'use strict';

'use strict'

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ['koal', 'pand', 'zebr'];
let correctedAnimals: string[] = animals.map(function (elem) {
  elem = elem + 'a';
  return elem;
}
);
console.log(correctedAnimals);

//for (let i: number = 0; i < animals.length; i++) {
//  console.log(animals[i] + 'a')
//};