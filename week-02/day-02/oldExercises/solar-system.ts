'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"


function putSaturn(list): string{
  list.splice(5, 'Saturn');  // inserts and element before index 5 ('Uranus't is lehet irni az 5 helyere)
console.log(list);

  return list;  
}

putSaturn(planetList);
export = putSaturn;


