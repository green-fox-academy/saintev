'use strict';

import { Plant } from './plant';

export class Garden{
  protected _plants: Plant[] = [];

  public addPlant(plant: Plant): void{
    this._plants.push(plant);
  }

  public get plants(): Plant[]{
  return this._plants}


  public waterAll(amountAtDisposal: number): void{
    let thirstyPlants: Plant[] = this._plants.filter(plant => plant.needsWater() === true);
    let totalWaterForEachPlant: number = amountAtDisposal / thirstyPlants.length;

    console.log(`\nWatering with ${amountAtDisposal}`);

    thirstyPlants.forEach((plant: Plant) => plant.water(totalWaterForEachPlant));
    //for (let i: number = 0; i < thirstyPlants.length; i++){
    //thirstyPlants[i].water(totalWaterForEachPlant);
  }
  public printAll(): void{
    this._plants.forEach((plant: Plant) => plant.askForWater());
  }
    
}

