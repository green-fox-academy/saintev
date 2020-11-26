'use strict';

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: any[] = ['Arthur', 'Boe', 'Chloe'];
[names[1], names[2]] = [names[2], names[1]];
console.log(names);