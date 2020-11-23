' use strict';

let nameToGreet: string = 'GreenFox';
greet(nameToGreet);
function greet(name: string): void{
  console.log('Greetings, dear ' + name);
}