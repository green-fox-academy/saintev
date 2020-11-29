'use strict';

//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee
let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Create a new list ('List B') with the values of List A
let listB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Print out whether List A contains Durian or not
if (listA.indexOf('Durian') === -1){
  console.log(`Durian is not in ListA`);
} else {
console.log(`Yes, Durian is number`+ (listA.indexOf('Durian')+1) + ` in listA`);
}

//Remove Durian from List B
listB.splice(3, 1);
console.log(listB);

//Add Kiwifruit to List A after the 4th element
listA.splice(4,0, `kiwifruit`);
console.log(listA);

//Compare the size of List A and List B
if (listA.length > listB.length) {
  console.log(`listA is longer than listB`);
} else if (listA.length === listB.length) {
  console.log(`They are equal`);
} else {
console.log(`listB is longer than listA`);
}

console.log(listA, listB);

//Get the index of Avocado from List A
console.log(listA.indexOf('Avocado'));

//Get the index of Durian from List B
console.log((listB.indexOf(`Durian`)));

//Add Passion Fruit and Pomelo to List B in a single statement
listB.push('PassionFruit', 'Pomelo');
console.log(listB);

//Print out the 3rd element from List A
console.log(listA[3]);
