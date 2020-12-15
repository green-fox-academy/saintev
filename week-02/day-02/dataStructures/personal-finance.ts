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

function application (listOfExpenses: number[]): void {

  let application = {
  
  "amount spent": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue  }, 0),
    
  "greatest expense": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return Math.max(accumulator, currentvalue)
  }, 0),
  
  "cheapest spending": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return Math.min(accumulator, currentvalue)
  }, 0),
  
  "average spend": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return (accumulator + currentvalue)  }, 0)/expenses.length
  
  }
  
  Object.keys(application).forEach(key => {
    console.log(`${key} : ` + application[key]);
  });
    
  }  

application(expenses);



