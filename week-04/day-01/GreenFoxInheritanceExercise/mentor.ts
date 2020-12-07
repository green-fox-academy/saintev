'use strict';

import { Person } from './person';

export class Mentor extends Person{

  protected _level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this._name = name ?? 'Jane Doe';
    this._age = age ?? 30;
    this._gender = gender ?? 'female';
    this._level = level ?? 'intermediate';
  }

  public getGoal(): void{
  console.log(`My goald is: Educate brilliant junior software developers.`);
  }

  public introduce(): void{
  console.log( `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor.`);
  }
}

//let c = new Mentor('Jozsi', 34, 'male', 'intermediate');
//console.log(c.introduce());
