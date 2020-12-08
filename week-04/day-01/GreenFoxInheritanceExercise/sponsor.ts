'use strict';

import { Person } from './person';

export class Sponsor extends Person{

  protected _company: string;
  protected _hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this._hiredStudents = 0;
    this._company = company ?? 'Google';
  }

  public introduce(): void{
    console.log(  `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }
  public hire() {
    this._hiredStudents += 1
  }
  public getGoal(): void{
  console.log(`My goal is: Hire brilliant junior software developers.`);
  }
}