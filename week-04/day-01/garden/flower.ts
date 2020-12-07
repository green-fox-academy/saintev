'use strict';

export class Flower {
  protected _color: string;
  protected _waterAmount: number;
  protected _needsWater: boolean;
  
  constructor(color: string) {
    this._color = color;
    this._waterAmount = 0;
    
    if (this._waterAmount < 5) {
      this._needsWater === true;
    } else this._needsWater === false;
  }

  public water(number: number): number {
    this._waterAmount = this._waterAmount + (number * 0.75);
    return this._waterAmount;
  }

  public askForWater(): void {
    if (this._needsWater) true; {
      console.log(`The ${this._color} flower needs water`);
    } else(this._needsWater) false;{ 
      console.log(`The ${this._color} flower doesn't need water`);
      
    }
  }
}
let a = new Flower('purple');
console.log(a.askForWater());
