// prototype pattern
function Car(){}

Car.prototype.wheels = 4;

// creating new instance
let Audi = new Car();
let Honda = new Car()

Audi.wheels = 10;

console.log(Audi.wheels)
console.log(Honda.wheels)

