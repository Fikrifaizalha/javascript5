class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;

    const johnCar = new Car("H121S", "Honda", 4);
    const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
    const dimasCar = new Car("TA1408K", "Tesla", 4);
  }
}

VehicleFactory.repair([johnCar, tomMotor, dimasCar]);

class VehicleFactory {
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`);
    });
  }
}
