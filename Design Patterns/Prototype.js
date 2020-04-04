// prototype pattern
function Car(){}

Car.prototype.wheels = 4;

// creating new instance
Audi = new Car();
Honda = new Car()

Audi.wheels = 10;

console.log(Audi.wheels)
console.log(Honda.wheels)

