'use strict';

export class Plant {
  protected _color: string;
  protected _waterAmount: number;
  //protected _needsWater: boolean;
  protected _plantType: string;
  protected _absorptionRate: number;
  protected _criticalWaterLevel: number;
  
  constructor(color: string, plantType: string, absorptionRate: number, criticalWaterLevel: number) {
    this._color = color;
    this._waterAmount = 0;
    this._plantType = plantType;
    this._absorptionRate = absorptionRate;
    this._criticalWaterLevel = criticalWaterLevel;
    //this._needsWater = true;
  }
  public needsWater(): boolean{
    return this._waterAmount < this._criticalWaterLevel;
  }
  
  public water(number: number): void {
    this._waterAmount += number * this._absorptionRate;  
  }
  
  public askForWater(): void {
    console.log(`The ${this._color} ${this._plantType} ${this.needsWater() === true ? 'needs' : 'doesn\'t need'} water `);
  }
  
  public get plantType(): string{
    return this._plantType
  }
}


