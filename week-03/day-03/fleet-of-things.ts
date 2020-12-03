import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let first = new Thing(`Get milk`);
let second = new Thing('Remove the obstacles');
let third = new Thing('Stand Up');
let fourth = new Thing('Eat lunch');

third.complete();
fourth.complete();

fleet.add(first);
fleet.add(second);
fleet.add(third);
fleet.add(fourth);

console.log(fleet.toString());