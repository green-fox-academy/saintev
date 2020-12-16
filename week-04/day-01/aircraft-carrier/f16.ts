'use strict';

import { inherits } from 'util';
import { Aircraft } from './aircraft';

export class F16 extends Aircraft {
 
  constructor(){
    super();
    this._type = 'F16';
    this._baseDamage = 30;  
    this._maxAmmo = 8;
    this._isPriority = false;
  }
  
}