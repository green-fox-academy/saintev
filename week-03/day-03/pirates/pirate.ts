'use strict';

import { Ship } from './ship';

export class Pirate {
  
  protected _intoxicationLevel: number;
  protected _drinksHad: number;
  public _isAlive: boolean;
  public _isConscious: boolean;
  protected _isCaptain: boolean;
  protected _isPartOfACrew: boolean;

  constructor(isCaptain?:boolean) {
    this._intoxicationLevel = 0;
    this._drinksHad = 0;
    this._isAlive = true;
    this._isConscious = true;
    this._isCaptain = isCaptain ?? false
    this._isPartOfACrew = false;
  }

  public isCaptain(): boolean{
    return this._isCaptain;
  }
  public getIntoxicationLevel(): number {
    return this._intoxicationLevel;
  }

  public drinkSomeRum() {
    if (this._isAlive) {
    this._intoxicationLevel += Math.floor(Math.random() * 10);
    this._drinksHad++;  
    } else {
    console.log(`He's dead`);
    }
  }

  public passOut(): void {
    this._isConscious = false;
  }

  public isAlive(): boolean {
    return this._isAlive;
  }
  
  public howIsGoingMate(): void {
    if (this._isAlive) {
      if (this._drinksHad <= 4) {
        console.log(`Pour me anudder!`);
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
        this.passOut();
      }
    } else {
    console.log(`He's dead`);
    }
  }

  public die():void {
    this._isAlive = false;
    this._isConscious = false;
  }

  public brawl(pirate: Pirate): void {
    let chance: number = Math.random();
    if (this._isAlive && pirate._isAlive) {
      if (chance <= 0.33) {
        this.die();
      } else if (chance > 0.33 && chance <= 0.66) {
        pirate.die();
      } else {
        pirate.passOut();
        this.passOut();
      }  
    } else {
      console.log(`One of them is dead`);
    }
  }

  
}