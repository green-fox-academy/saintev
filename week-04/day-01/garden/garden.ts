'use strict';

import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  protected _flowers: Flower[];
  protected _trees: Tree[];

  constructor() {
    this._flowers = [];
    this._trees = [];
  }

  public addFlower(flower: Flower): void {
    this._flowers.push(flower);
  }

  public addTree(tree: Tree): void{
    this._trees.push(tree);
    
  }

  public countThirstyPlants(): number{
  let counter: number = 0;
  for (let i: number = 0; i < this._trees.length; i++)
    if (this._trees[2]) {
      counter++;
    }
  return counter;
  }
}

let myGarden = [];

let yellowFlower = new Flower('yellow');
myGarden.push(yellowFlower);
let blueFlower = new Flower('blue');
myGarden.push(blueFlower);
let purpleTree = new Tree('purple');
myGarden.push(purpleTree);
let orangeTree = new Tree('orange');
myGarden.push(orangeTree);

for (let plants of myGarden) {
  plants.askForWater();
  console.log(plants.water(100));
  plants.askForWater();
  console.log(plants.countThirstyPlants());
}
