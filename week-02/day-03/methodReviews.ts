'use strict';
// forEach
//mit csinal? minimalizalt for loopot
// csak arrayen lehet
let fruits: string[] = ['alma', 'korte', 'szolo'];

//kiirnank for looppal az elemeit
for (let i: number = 0; i < fruits.length; i++){
console.log(fruits[i]);
}
//kiirja az osszes gyumolcsot

//ehelyett
fruits.forEach();
//a zarojelben var egy functiont, ez a callback
//anonym functiont: csak itt fogom felhasznalni ezert nem kell neki nev
fruits.forEach(function (elem, index) {
  console.log(index);
  console.log(elem);
  });
// hogyan kapja meg az elemet? nem kell manualisan odaadni, igy van megirva, automatikusan
// ki lehet meg irni az indexet is
//nincs eremenye, nem returnol, nem tudom elmenteni

//map
//arrayt ad vissza eredmenyul, el is lehet menteni
fruits.map(function (elem) {
console.log(elem);

})
//de ezt el is lehet menteni
let newFruits = fruits.map(function (elem) {
  return elem;
})
console.log(newFruits);
// a map el fog kesziteni egy arrayt es beleteszi az arraybe az elemeket amiket
//visszareturnolunk

//igy lehetne forEachet hasznalni map helyett
let forEachFruits = []
fruits.forEach(function (elem) {
  forEachFruits.push(elem);
})

// egymasba lehet tenni
fruits.forEach(function (elem) {
  fruits.forEach(function (masodikelem) {
  console.log((elem + '' + masodikelem));
  
  })
})

//van-e a listaban mondjuk 
function isItIncluded(myFruit: string) {
  fruits.forEach(function (elem) {
    if (myFruit ===) {
      console.log(`${myFruit} is in the array`);
    } else {
      console.log(`It is not in the array`);
    }
  }
  )
}
  
  //ha nincs benne
function isIItIncluded(myFruit: string){
  let checker: boolean = false;
  fruits.forEach(function (elem) {
    if (myFruit === elem) {
      checker = true;
    }
  });
  if (checker) {
    console.log(`${myFruit} is in the array`);
  } else {
  console.log((`No luck`));
  }
}
isIItIncluded('alma');
isIItIncluded('dinnye');

//include
let result = fruits.includes('alma') 
console.log(result);
//kiirja hogy true vagy false
