'use strict';

import { Aircraft } from './aircraft';

export class Carrier {

  protected _aircrafts: Aircraft[] = [];
  protected _ammoStore: number;
  protected _healthPoint: number;

  constructor(initialAmmo, healthPoint) {
    this._ammoStore = initialAmmo;
    this._healthPoint = healthPoint
  }

  public add(aircraft: Aircraft): void {
    this._aircrafts.push(aircraft);  
  } 

  public fill() {
    
  }

  


}