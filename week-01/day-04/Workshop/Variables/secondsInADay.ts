'use strict'

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

const TotalSeconds: number = 24*60*60
console.log(TotalSeconds-((currentHours*60*60)+(currentMinutes*60)+currentSeconds));
