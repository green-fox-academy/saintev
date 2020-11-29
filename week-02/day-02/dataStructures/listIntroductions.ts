'use strict';

let newList: string[] = [];
console.log(newList.length);

//Add William to the list
newList.push('William');
console.log(newList);

//Print out whether the list is empty or not
if (newList.length === -1) {
  console.log('the list is empty')
} else {
console.log('no the list is not empty');
}

//Add John to the list
newList.push('John');
console.log(newList);

//Add Amanda to the list
newList.push('Amanda');
console.log(newList);

//Print out the number of elements in the list
console.log(newList.length);

//Print out the 3rd element
console.log((newList[2]));

//Iterate through the list and print out each name
for (let i: number = 0;  i <(newList.length); i++){
  console.log(newList[i]);
  
} // or

newList.forEach(function (names) {
  console.log(names);
  
})

//Iterate through the list and print
for (let j: number = 0; j < (newList.length); j++){
console.log((j+1)+'. ' + newList[j]);
}

//Remove the 2nd element
let newestList: string[] = ['William', 'John', 'Amanda','Harry', 'Sally']
newestList.splice(0, 1); // ez kivagja a nulladik helyen levot, egyet
// eloszor ezt irtam: newestList = newestList.splice(0,1) ez csak a kivagottat mutatta
console.log(newestList);

//Iterate through the list in a reversed order and print out each name
newestList.reverse();
for (let k: number = 0; k < newestList.length; k++){
  console.log(newestList[k]);
  }

//Remove all elements
newestList = [];
console.log(newestList);

