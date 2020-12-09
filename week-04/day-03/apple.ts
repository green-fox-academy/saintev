'use strict';

export class Apple {
  protected _name: 'string';

  constructor(name) {
    this._name = name;
  }

  public getApple() {
    return this._name;
  }

  public addApples(myApples: number, yourApples: number): number {
    return myApples + yourApples;
  }
}





