// constructor
function Cat(name, color, teeth){
    this.legs = 4;
    this.name = name;
    this.color = color;
    this.teeth = teeth;
}

var cat1 = new Cat("Cat 1", "White", 44);
var cat2 = new Cat("Cat 2", "Orange", 12);

console.log(cat1.legs)
console.log(cat2.name)