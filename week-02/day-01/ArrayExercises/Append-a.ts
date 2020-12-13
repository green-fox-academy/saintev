'use strict';

let animals: string[] = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];

// 1.
//let newAnimals: string[] = animals.map(function (x) {
//  x = x + `a`;
//  return x;
//});
//  newAnimals.forEach(x => console.log(x));

// 2.
//let newAnimals: string[] = animals.map(x => { return x + `a` });
//newAnimals.forEach(x => console.log(x));

  
// 3.
let newAnimals: string[] = animals.map(x => x + `a`);
newAnimals.forEach(x=>console.log(x));