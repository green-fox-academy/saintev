'use strict';

//We are going to represent our expenses in a list containing integers.
//Create a list with the following items.
//500, 1000, 1250, 175, 800 and 120
let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
console.log(expenses);

//Create an application which solves the following problems.
//How much did we spend?
//Which was our greatest expense?
//Which was our cheapest spending?
//What was the average amount of our spendings?

let application = {

  "amount spent": expenses.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue  }, 0),
    
  "greatest expense": expenses.reduce(function (accumulator, currentvalue) {
    return Math.max(accumulator, currentvalue)
  }, 0),
  
  "cheapest spending": expenses.reduce(function (accumulator, currenvalue) {
    return Math.min(accumulator, currenvalue)
  }, 0),
  
  "average spend": expenses.reduce(function (accumulator, currentvalue) {
    return (accumulator + currentvalue)  }, 0)/expenses.length
  
}
console.log(application);
for (let keys in application) {
console.log(keys);
}
Object.keys(application).forEach(function (keys) {
console.log(application[keys]);

})
