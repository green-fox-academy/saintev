'use strict';

let names: any[] = ['Arthur', 'Boe', 'Chloe'];
[names[1], names[2]] = [names[2], names[1]];
console.log(names);