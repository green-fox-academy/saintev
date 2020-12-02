'use strict';

//use export Counter at the end of your file
//Check if everything is working fine with the proper test
//Download counter.test.js and place it next to your solution
//Run npm install tape @types/tape --save-dev in the root of your repository folder (where you have a package-lock.json file already)
//Run the test file with ts-node

//Create a Counter class
//which has an integer property
export class Counter{
  _integer: number;

//when creating an instance, it should have a default value 0 or we can specify it when creating
  constructor(integer: number) {
    this._integer = 0;
  }
//we can add(number) to increase the counter's value by a whole number
  public addNumber(number): number{
    this._integer += number;
    return this._integer;
  }

//or we can add() without parameters just increasing the counter's value by one
  public add(): number{
    this._integer++;
    return this._integer;
  }

//and we can get() the current value as string
  public get integer(): number{
    this._integer.toString;
    return this._integer;
  }
//also we can reset() the value to the initial value
  public reset(): number {
    this._integer = 0;
    return this._integer;
  }
}
let szamlalo = new Counter(8);
console.log(szamlalo.integer);
szamlalo.add();
console.log(szamlalo.integer);








