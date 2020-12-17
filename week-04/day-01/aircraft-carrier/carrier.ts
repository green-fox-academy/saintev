'use strict';

import { Aircraft } from './aircraft';

export class Carrier {

  protected _aircrafts: Aircraft[] = [];
  protected _carrierAmmo: number;
  public _healthPoint: number;
  public _totalDamage: number = 0;

  constructor(initialAmmo: number, healthPoint: number) {
    this._carrierAmmo = initialAmmo;
    this._healthPoint = healthPoint
  }

  public add(aircraft: Aircraft): void {
    this._aircrafts.push(aircraft);
  }

  public fill(): number {
    if (this._carrierAmmo === 0) {
      console.log(`The carrier is out of ammo!`);
    }
    
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      if (this._aircrafts[i].getPriority()) {
        this._carrierAmmo = this._aircrafts[i].refill(this._carrierAmmo);
      }
    }
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      if (this._aircrafts[i].getPriority() == false) {
        this._carrierAmmo = this._aircrafts[i].refill(this._carrierAmmo);
      }
    }
    return this._carrierAmmo;
  }

  public fight(carrier: Carrier): void {
    this._aircrafts.forEach(aircraft => aircraft.fight());
    carrier._healthPoint -= this.getTotalDamage();
    if (carrier._healthPoint < 0) {
    carrier._healthPoint = 0;
    }
  }
  
  public getTotalDamage(): number {
    for (let i: number = 0; i < this._aircrafts.length; i++) {
    this._totalDamage += this._aircrafts[i].getAllDamage();
    };
    return this._totalDamage;
  }

  public getStatus(): void {
    console.log(`HP: ${this._healthPoint}, Aircraft count: ${this._aircrafts.length}, Ammo storage: ${this._carrierAmmo}, Total damage: ${this._totalDamage}`);
    
    this._aircrafts.forEach(x => console.log(`Type : ${x.getType()}, Ammo : ${x.getAmmo()}, Base Damage : ${x.getBaseDamage()}, All Damage : ${x.getAllDamage()}`));
    
    if (this._healthPoint === 0) {
      console.log(`It's dead Jim :(`);
    }
  }  
}
