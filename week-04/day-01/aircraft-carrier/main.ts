'use strict';

import { Aircraft } from './aircraft';
import { Carrier } from './carrier';
import { F16 } from './f16';
import { F35 } from './f35';

let myPlane = new F16;
let myOtherPlane = new F35;

console.log(myPlane.refill(300));
console.log(myPlane.fight());
console.log(myPlane.getType());
console.log(myPlane.getStatus());
console.log(myPlane.isPriority());

let myListOfAircrafts = new Carrier(1000, 500);
myListOfAircrafts.add(myPlane);
myListOfAircrafts.add(myOtherPlane);
console.log(myListOfAircrafts);

