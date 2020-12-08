'use strict';

export class Flower {
  protected _color: string;
  protected _waterAmount: number;
  protected _needsWater: boolean;
  
  constructor(color: string) {
    this._color = color;
    this._waterAmount = 0;
    this._needsWater = true;
  }
  //public ifNeedsWater(): boolean {
  //  return this._waterAmount < 5;
  //}

  public water(number: number): number {
    if (this._needsWater) {
    this._waterAmount = this._waterAmount + (number * 0.75);
    return this._waterAmount;
    }
    if (this._waterAmount < 5){
      this._needsWater = true;
    } else {
      this._needsWater = false;
    }
  }

  public askForWater(): void {
    if (this._needsWater) {
      console.log(`The ${this._color} flower needs water`);
    } else {
      console.log(`The ${this._color} flower doesn't need water`);
    }
  } 
}

let a = new Flower('purple');

//console.log(a._needsWater);
//console.log(a._waterAmount);
//a.water(30);
//console.log(a._needsWater);
//console.log(a._waterAmount);
//console.log(a.askForWater());