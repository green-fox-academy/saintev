'use strict';

export class Person{
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this._name = name ?? 'Jane Doe';
    this._age = age ?? 30,
    this._gender = gender ?? 'female';
  }
    
  public introduce(): string {
    return `Hi, my name is ${this._name}, a ${this._age} old ${this._gender}`;
  }

}
//let a = new Person(`Anna`, 30, `female`);
//console.log(a.introduce());



