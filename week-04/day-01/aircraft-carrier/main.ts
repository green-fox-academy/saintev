'use strict';

import { Aircraft } from './aircraft';
import { Carrier } from './carrier';
import { F16 } from './f16';
import { F35 } from './f35';

let myPlane = new F16;
let myOtherPlane = new F35;
let myPlane3 = new F16;
let myPlane4 = new F35;

//console.log(myPlane.refill(300));
//console.log(myPlane.fight());
//console.log(myPlane.getType());
//console.log(myPlane.getStatus());
//console.log(myPlane.isPriority());
//
let myCarrier = new Carrier(1000, 500);
let myCarrier2 = new Carrier(800, 600);

myCarrier.add(myPlane);
myCarrier.add(myOtherPlane);
myCarrier2.add(myPlane3);
myCarrier2.add(myPlane4);

console.log(myPlane.refill(300));
console.log(myOtherPlane.refill(300));

console.log(myPlane.fight());
console.log(myPlane.getAllDamage());
console.log(myOtherPlane.fight());
console.log(myOtherPlane.getAllDamage());

//console.log(myCarrier.fill());
myCarrier.fight(myCarrier2);
console.log(myCarrier._healthPoint);
console.log(myCarrier2._healthPoint);
//myCarrier.getStatus();
//myCarrier2.getStatus();
//myCarrier2.getTotalDamage();
console.log(myCarrier.getTotalDamage());
myCarrier.getStatus();
myCarrier2.getStatus();



