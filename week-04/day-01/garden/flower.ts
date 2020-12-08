'use strict';

import { Plant } from './plant';

export class Flower extends Plant {
  constructor(color: string) {
    super(color, 'flower', 0.75, 5)
  }
} 