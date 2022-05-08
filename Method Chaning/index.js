function Main(a) {
  this.value = a;
}

Main.prototype.add = function (a) {
  this.value += a;
  return this;
};

Main.prototype.subtract = function (a) {
  this.value -= a;
  return this;
};

Main.prototype.multiply = function (a) {
  this.value *= a;
  return this;
};

Main.prototype.divide = function (a) {
  this.value /= a;
  return this;
};

let final = new Main(10).subtract(5).add(5).multiply(4).divide(5);
let final2 = new Main(10).subtract(5).divide(5).add(10);
console.log(final2.value);
