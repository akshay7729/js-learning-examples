// its all about values
// doesn't work with objects
// for of will loop through property values

const obj = {
  pet: "Dog",
  name: "Cheeseburger",
  breed: "English Bulldog",
  age: 4,
};

const arr = ["a", "b", "c", "d"];
const str = "Hello World";

// object
// error - obj is not iterable

// for (let elem of obj) {
//     console.log(elem);
// }

// array
for (let val of arr) {
  // print array values
  // output -
  //   a
  //   b
  //   c
  //   d
  //   console.log(val);
}

// string
for (let val of str) {
  // output -
  // H
  // e
  // l
  // l
  // o
  //
  // W
  // o
  // r
  // l
  // d
  console.log(val);
}
