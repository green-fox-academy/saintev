'use strict';

import { StringedInstrument } from './stringedInstruments';

export class BassGuitar extends StringedInstrument{


  constructor(numberOfStrings?: number) {
    super(numberOfStrings);
    this._name = 'Bass Guitar';
    this._numberOfStrings = numberOfStrings ?? 4;
  }

  public sound(): string {
    return 'Duum-duum-duum';
  }

  public play(): void{
    console.log (`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}

  
