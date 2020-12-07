'use strict';

export class Tree{
  protected _color: string;
  protected _waterAmount: number;

  constructor(color: string) {
    this._color = color;
    this._waterAmount = 0;
  }

  public water(number: number): number{
    this._waterAmount = this._waterAmount + (number * 0.4);
    return this._waterAmount;
  }

  public askForWater(): void{
    if (this._waterAmount < 10) {
    console.log(`The ${this._color} tree needs water`);
    }else console.log(`The ${this._color} tree doesn't need water`);
    
  }
}

