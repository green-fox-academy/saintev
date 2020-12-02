'use strict'

//Create Sharpie class
//We should know about each sharpie their color (which should be a string), 
//width(which will be a floating point number), inkAmount(another floating point number)
//When creating an instance, we need to specify the color and the width
//Every sharpie object is created with a default 100 as inkAmount
//We can use() the sharpie objects which decreases inkAmount

export class Sharpie{
  _color: number;
  _width: number;
  _inkAmount: number;

  constructor(color: number, width: number, inkAmount: number) {
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }
  public use() {
    this._inkAmount--;
  }
}

let pinkSharpie = new Sharpie(5.3, 3.3, 2);
let yellowSharpie = new Sharpie(5.4, 2.3, 4);
pinkSharpie.use();
console.log(pinkSharpie._inkAmount);
yellowSharpie.use();
console.log(yellowSharpie);