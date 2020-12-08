'use strict';

import { StringedInstrument } from './stringedInstruments';

export class Violin extends StringedInstrument{
  
   constructor(name?: string, numberOfStrings?: number) {
    super(numberOfStrings);
    this._name = 'Violin';
    this._numberOfStrings = numberOfStrings ?? 4;
  }

  public sound(): string{
    return 'Screech';
  }

  public play(): void{
  console.log (`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}