'use strict';

import { Pirate } from './pirate';
import { Ship } from './ship';

let Jack = new Pirate(true);
let Jake = new Pirate;
let Joe = new Pirate(true);

//Jack.die()
//Jack.drinkSomeRum();
//Jack.drinkSomeRum();
//Jack.drinkSomeRum();

//console.log(Jack.getIntoxicationLevel());
//Jack.howIsGoingMate();
//Jack.brawl(Jake);
//console.log(Jack._isAlive);
//console.log(Jake._isAlive);
//console.log(Jack._isConscious);
//console.log(Jake._isConscious);
//console.log(Jack._isCaptain);
//console.log(Jake._isCaptain);
let myCrew = new Ship;
myCrew.fillShip(Jack);
myCrew.fillShip(Jake);
myCrew.fillShip(Joe);

console.log(myCrew._crew);




