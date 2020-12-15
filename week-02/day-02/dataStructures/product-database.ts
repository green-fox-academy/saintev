'use strict';

import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { truncate } from "fs";

let productDatabase = {
  'Eggs': 200,
  'Milk':	200,
  'Fish':	400,
  'Apples':	150,
  'Bread':	50,
  'Chicken':	550
}

//How much is the fish?
console.log(productDatabase['Fish']);

//What is the most expensive product?
let max: number = 0;
let maxKey: string;
Object.keys(productDatabase).forEach((key) => {
  if ((productDatabase[key]) > max) {
    max = productDatabase[key];
    maxKey = key;
  }
});
console.log(`The most expensive product is ${maxKey}, the price is ${max}`);

//What is the average price?
let total: number = 0;
let counter: number = 0;
Object.keys(productDatabase).forEach((key) => {
  total += productDatabase[key];
  counter++;
});
console.log(`The average price is ${total/counter}`);

//How many products' price is below 300?
let below300: number = 0;
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] < 300) {
    below300++
  }
});
console.log(`There are ${below300} products below 300`);

//Is there anything we can buy for exactly 125?
let isThere: boolean = false;
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] === 125) {
    isThere = true;
    console.log(`We can buy ${key} for exactly 125`);
    //  } else {
    //    isThere === false;
    //  }
  }
});
if (isThere = false) {
  console.log(`There is nothing we can buy for exactly 125.`);
}

//What is the cheapest product?
let cheapest: number = max;
let cheapestKey: string;
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] < cheapest) {
    cheapest = productDatabase[key];
    cheapestKey = key;
  }
});
console.log(`The cheapest product is ${cheapestKey}, it is ${cheapest}.`);

//Which products cost less than 201? (just the name)
let below201: string[] = [];
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] < 201) {
    below201.push(key);
  }
});
console.log(`These items are below 201 : ${below201}`);

//Which products cost more than 150? (name + price)
let over150: string[] = [];
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] > 150) {
    over150.push(key, productDatabase[key]);
  }
})
console.log(`These items cost more than 150: ${over150}`);
