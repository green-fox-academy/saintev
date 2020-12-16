'use strict';

export abstract class Aircraft {

  protected _ammo: number;
  protected _maxAmmo: number;
  protected _baseDamage: number;
  protected _allDamage: number;
  protected _type: string;
  protected _isPriority: boolean;

  constructor() {
    this._ammo = 0;
    this._allDamage = 0;
  }

  public refill(amount: number): number {
    if (amount < (this._maxAmmo - this._ammo)) {
      this._ammo += amount;
      amount = 0;
    } else {
      amount = amount - this._maxAmmo + this._ammo;
      this._ammo = this._maxAmmo;
    }
    return amount;
  };

  public fight(): number {
    this._allDamage += this._baseDamage * this._ammo;
    this._ammo = 0;
    return this._allDamage;
  }

  public getType(): string {
    return this._type;
  }

  public getStatus(): string {
    let status = `Type: ${this._type}, Ammo: ${this._ammo}, Base Damage: ${this._baseDamage}, All Damage: ${this._allDamage}`;  
    return status;
  }

  public isPriority(): boolean {
    if (this._isPriority) {
      return this._isPriority;
    }
  }
}