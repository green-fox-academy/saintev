'use strict';

let myObject = {
  1: 'alma',
  2: 'korte',
  3: 'szolo'
}
for (const key in myObject) {
console.log(key);
}
//ez kiirja az osszes kulcsot

//de ay elemeket is ki akarom irni
for (const key in myObject) {
  console.log(myObject[key]);
}

