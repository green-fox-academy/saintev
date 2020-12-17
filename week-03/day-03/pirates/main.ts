'use strict';

import { Pirate } from './pirate';

let Jack = new Pirate;
let Jake = new Pirate;

//Jack.die()
//Jack.drinkSomeRum();
//Jack.drinkSomeRum();
//Jack.drinkSomeRum();

//console.log(Jack.getIntoxicationLevel());
//Jack.howIsGoingMate();
Jack.brawl(Jake);
console.log(Jack._isAlive);
console.log(Jake._isAlive);
console.log(Jack._isConscious);
console.log(Jake._isConscious);



