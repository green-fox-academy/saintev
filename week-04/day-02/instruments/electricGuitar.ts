'use strict';

import { StringedInstrument } from './stringedInstruments';

export class ElectricGuitar extends StringedInstrument{
  
  constructor(numberOfStrings?: number) {
    super(numberOfStrings);
    this._name = 'Electric Guitar';
    this._numberOfStrings = numberOfStrings ?? 6;
  }

  public sound(): string{
    return 'Twangg';
  }

  public play(): void{
  console.log (`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}