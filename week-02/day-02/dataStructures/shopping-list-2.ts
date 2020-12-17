'use strict';

let products = {
  'Milk':	1.07,
  'Rice':	1.59,
  'Eggs':	3.14,
'Cheese':	12.60,
'Chicken Breasts':	9.40,
'Apples':	2.31,
'Tomato':	2.58,
'Potato':	1.75,
'Onion':	1.10
}

let bobsList = {
  'Milk':	3,
  'Rice':	2,
  'Cheese':	1,
  'Chicken Breasts':	4,
  'Apples':	1,
  'Tomato':	2,
  'Potato':	1 
}

let alicesList = {
  'Rice':	1,
  'Eggs':	5,
  'Chicken Breasts':	2,
  'Apples':	1,
  'Tomato':	10
}

//How much does Bob pay?
let bobTotal: number = 0;
Object.keys(bobsList).forEach((key) => {
  bobTotal += (bobsList[key])  
}); /// ezt meg a product arakkal be kell szorozni


  
//How much does Alice pay ?



//Who buys more Rice?
if ((bobsList['Rice']) > (alicesList['Rice'])) {
  console.log(`Bob buys more rice.`);
} else if ((bobsList['Rice']) < (alicesList['Rice'])) {
  console.log(`Alice buys more rice.`);
} else {
console.log(`They buy the same amount of rice.`);
};

//Who buys more Potato?
if (bobsList.hasOwnProperty('Potato') == false) {
  console.log(`Bob buys no potatoes`);
  
} else if (alicesList.hasOwnProperty('Potato') == false) {  
  console.log(`Alice buys no potatoes`);

} else if ((bobsList['Potato']) < (alicesList['Potato'])) {
  console.log(`Alice buys more potatoes.`);
}
else if ((bobsList['Potato']) < (alicesList['Potato'])) {
  console.log(`They buy the same amount of potatoes.`);
}
else console.log(`Bob buys more potatoes.`);
;

//Who buys more different products?

let valuesArray: number[] = [];
Object.keys(bobsList).forEach((keys) => {
  valuesArray.push(bobsList[keys]);
});

let valuesArray2: number[] = [];
Object.keys(alicesList).forEach((keys) => {
  valuesArray2.push(alicesList[keys])
}); 

if (valuesArray.length > valuesArray2.length) {
  console.log(`Bob buys more different products`);
} else if (valuesArray.length < valuesArray2.length) {
  console.log(`Alice buys more different products`);
} else {
  console.log(`They buy the same amount of different products`);
};

//Who buys more products? (piece)

let itemAmountBob: number;
itemAmountBob = (valuesArray.reduce(function (amount, currentvalue) {
  return (amount + currentvalue)
}, 0));

let itemAmountAlice: number;
itemAmountAlice = (valuesArray2.reduce(function (amount, currentvalue) {
  return (amount + currentvalue)
}, 0));

if (itemAmountAlice > itemAmountBob) {
  console.log(`Alice buys more pieces of products`);
} else if (itemAmountAlice < itemAmountBob) {
  console.log(`Bob buys more pieces of products`);
} else {
  console.log(`They buy equeal amounts of pieces of products`);
};