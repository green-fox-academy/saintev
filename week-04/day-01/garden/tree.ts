'use strict';

export class Tree {
  protected _color: string;
  protected _waterAmount: number;
  protected _needsWater: boolean;

  constructor(color: string) {
    this._color = color;
    this._waterAmount = 0;
    this._needsWater = true;
  }

  //public getNeedsWater(): boolean {
  //  return this._needsWater;
  //}

  public water(number: number): number {
     
    if (this._needsWater) {
      this._waterAmount = this._waterAmount + (number * 0.4);
    return this._waterAmount;
    }
    if (this._waterAmount < 10) {
      this._needsWater = true;
    } else {
      this._needsWater = false;
    }
  }

  public askForWater(): void {
    if (this._needsWater) {
      console.log(`The ${this._color} tree needs water`);
    } else {
      console.log(`The ${this._color} tree doesn't need water`);
    }
  }
} 

