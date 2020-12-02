'use strict';

//Create an Animal class
//Every animal has a hunger value, which is a whole number
//Every animal has a thirst value, which is a whole number
//when creating a new animal object these values are created with the default 50 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one

export class Animal{
  _hungerValue: number;
  _thirstValue: number;

  constructor(hungerValue: number, thirstValue: number) {
    this._hungerValue = 50;
    this._thirstValue = 50;
  }
  public eat():number {
    this._hungerValue--;
    return this._hungerValue;
  }
  public drink(): number{
    this._thirstValue--;   
    return this._thirstValue;
  }
  public play(): number{
    this._thirstValue++;
    this._hungerValue++;
    return this._hungerValue + this._thirstValue;
  }
}
let lion = new Animal(8, 6);
let goat = new Animal(8, 5);
console.log(lion._thirstValue);
goat.play();
console.log(goat._thirstValue);


