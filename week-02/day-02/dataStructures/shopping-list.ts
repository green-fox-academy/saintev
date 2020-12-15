'use strict';

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

//Create an application which solves the following problems.
//Do we have milk on the list?
//Do we have bananas on the list?

if (shoppingList.indexOf('milk') === -1) {
  console.log(`We don't have milk on the list`);
} else {
}console.log(`Yes, milk is the ${shoppingList.indexOf('milk')+1}nd item on the list`);

if (shoppingList.indexOf('bananas') === -1) {
  console.log(`We don't have bananas on the list yet`);
} else {
  console.log(`Yes, bananas are the ${shoppingList.indexOf('bananas')}th item on the list`);
}