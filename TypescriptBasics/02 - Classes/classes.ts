// You create a class like this, so practically the same as in Java.

class Car {
  // public properties, these are accesible from outside the class
  engineName: string;
  gears: number;
  // private property, this one is only accessable from within this class
  private speed: number;

  constructor(speed: number) {
    // The speed is the parameter or 0 if it's invalid
    this.speed = speed || 0;
  }

  accelarate(): void {
    this.speed++;
  }

  throttle(): void {
    this.speed--;
  }

  getSpeed(): void {
    console.log(this.speed);
  }

  static numberOfWheels(): number {
    return 4;
  }
}

// Lets work with this class now, we're making a car and we're using the functions
let car = new Car(5);
car.accelarate();
car.getSpeed();

// Here we print the static number of wheels. We access it from the class Car and not the object car!
console.log(Car.numberOfWheels());
