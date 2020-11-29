'use strict';

//We are going to play with maps. Feel free to use the built-in methods where possible.
//Create an empty map where the keys are integers and the values are characters
let map = {
  1: '£',
  2: '%',
  3: '&',
}

//Print out whether the map is empty or not
if (Object.keys(map).length === 0) {
  console.log('the map is empty');
} else{
  console.log('the map is not empty');
 }

//Add the following key-value pairs to the map
//Key	Value
//97	a
//98	b
//99	c
//65	A
//66	B
//67	C
map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';

//Print all the keys
for (let key in map) {
console.log(key);
}

//Print all the values
Object.keys(map).forEach(key => {
  console.log(map[key])
});
Object.keys(map).forEach(function (kulcsok) {
  console.log(map[kulcsok]);
});

//Add value D with the key 68
map[68] = 'D';
for (let key in map) {
console.log(key);
}

//Print how many key-value pairs are in the map
let count: number = 0;
for (let key in map) {
  ++count
}
console.log(count);

//Print the value that is associated with key 99
console.log(map[99]);
 
//Remove the key-value pair where with key 97
delete map[97];
for (let key in map) {
console.log(key);
}

//Print whether there is an associated value with key 100 or not
console.log(map.hasOwnProperty(100)); //returns false

//Remove all the key-value pairs
for (let key in map) {
  delete map[key];
}
