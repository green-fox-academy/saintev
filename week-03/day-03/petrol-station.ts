'use strict';
//
//Create a Station and a Car classes
//Station
//gasAmount -> available gas amount of the gas station
//refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//Car
//gasAmount -> gas amount of the car
//capacity -> capacity of the fuel tank
//create constructor for Car where:
//initialize gasAmount -> 0
//initialize capacity -> 100

export class Station{
  private _gasAmount: number;
  
  constructor(gasAmount: number) {
    this._gasAmount = gasAmount;
  }
  public refill(carname): number{ // ha beirom carname typenak hogy Car akkor nem mukodik csak ha publicra teszem a Car Fieldeket
    this._gasAmount -= ((carname._capacity)-(carname._gasAmount)); // akkor is jo lesz ha az carban nem 0 benzin van
    carname._gasAmount += ((carname._capacity)-(carname._gasAmount));
    return this._gasAmount;
    }
}
export class Car{
  private _gasAmount: number;
  private _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  }

  public get gasAmount(): number{
    return this._gasAmount;
  }
  public get capacity(): number{
    return this._capacity;
  }
}

let shell = new Station(500);
let renault = new Car;
let audi = new Car;

console.log(`gas left after refilling audi: ` + shell.refill(audi));
console.log(`gas left at station after refilling renault: ` + shell.refill(renault));
console.log(`renaultban ennyi benzin van: ` + renault.gasAmount);
console.log(`audiban ennyi benzin van: `+ audi.gasAmount);




