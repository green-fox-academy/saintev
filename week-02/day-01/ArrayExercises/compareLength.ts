'use strict';


// - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "secondList is longer" to the console if `secondList` has more elements than
//   `firstList`

let firstList: any[] = [1, 2, 3];
let secondList: any[] = [4, 5];
if (secondList.length > firstList.length) {
  console.log(`secondList is longer`);
} else if (secondList.length < firstList.length) {
  console.log(`firstList is the longer one`);
  }