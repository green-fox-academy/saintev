'use strict';

import { Aircraft } from './aircraft';

export class F35 extends Aircraft {

  constructor() {
    super();
    this._type = 'F35';
    this._baseDamage = 50;
    this._maxAmmo = 12;
    this._isPriority = true;
  }
}