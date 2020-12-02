class Car {
  private static SERIES_NUMBER = 0;
  private _seriesNumber: number;

  constructor(brandName: string) {
    Car.SERIES_NUMBER++;
    this.seriesNumber = Car.SERIES_NUMBER;
  }
  public startCar(): void{
    this._startEngine();
  }
  private _startEngine(): void{
  }
}

let car = new Car('Mazda');
car.startCar();
car._startEngine() // it is private
