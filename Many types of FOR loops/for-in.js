// its all about keys and index

// for in loop iterates over properties of an object
// for in will loop through property name, index

const obj = {
  pet: "Dog",
  name: "Cheeseburger",
  breed: "English Bulldog",
  age: 4,
};

const arr = [1, 5, 3, 2, 5, 6, 2, 7, 9, 4];

// with object
for (let key in obj) {
  // will give key name or index
  // output -
  //   pet
  //   name
  //   breed
  //   age
  console.log("key", key);

  // will give values
  // output -
  //    Dog
  //    Cheeseburger
  //    English Bulldog
  //    4
  console.log("val", obj[key]);
}

// array
for (let key in arr) {
  console.log("arr key", key);

  console.log("arr val", arr[key]);
}
