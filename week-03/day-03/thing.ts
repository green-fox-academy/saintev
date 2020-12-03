class Thing {
  private _name: string;
  private _completed: boolean;

  constructor(name: string) {
    this._name = name;
  }

  public complete(): void {
    this._completed = true; 
  }

  getName(): string {
    return this._name;
  }

  getCompleted(): boolean {
    return this._completed; 
  }

  toString(): string {
    return `[${this._completed ? 'x' : ' '}] ${this._name}`; 
  }
}


export { Thing };