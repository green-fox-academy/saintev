'use strict';

import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument{
  protected _numberOfStrings: number;

  constructor(numberofStrings?:number) {
    super();
    this._numberOfStrings = numberofStrings;
  }
  public abstract sound(): void;

  

}