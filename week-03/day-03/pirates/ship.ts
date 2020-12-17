'use strict';

import { Pirate } from './pirate';

export class Ship {
  public _crew: Pirate[] = [];
  protected _hasCaptain: boolean;
  
  constructor() {
    this._hasCaptain = false;
  }

  //public set HasCaptain(hasCaptain:boolean): void {
  //  this._hasCaptain = hasCaptain;
  //}
  //public getHasCaptain():boolean {
  //  return this._hasCaptain;
  //}

  public fillShip(pirate: Pirate): void{
    if (pirate.isCaptain() == false) {
    this._crew.push(pirate);
    } else if (pirate.isCaptain) {
      if (this._hasCaptain == false) {
        this._crew.push(pirate);
        this._hasCaptain = true;
      } else {
      console.log(`Get lost we already have a captain!`);
      }
    }
  }

  
}