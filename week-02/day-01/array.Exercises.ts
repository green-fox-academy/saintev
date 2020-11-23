'use strict';

let numbers: number[] = new Array(1, 3, 5, 7);
console.log(numbers[2]);


let firstlist: any[] = [1, 2, 3];
let secondlist: any[] = [4, 5];
if (secondlist.length > firstlist.length){
console.log('p2 is longer');
}

let numbers2: number[] = [54, 23, 66, 12];
console.log(numbers2[1] + numbers2[2]);

let names: any[] = ['Arthur', 'Boe', 'Chloe'];
[names[1], names[2]] = [names[2], names[1]];
console.log(names);




