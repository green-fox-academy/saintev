'use strict';

// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method


let names: number[] = [4, 5, 6, 7];
for (let i: number = 0; i < names.length; i++) {
 console.log(names[i])
}

numbers.forEach(x => console.log(x));
