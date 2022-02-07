// in maps we can set objects as keys

const map = new Map([
  ["name", "Akshay"],
  ["age", 29],
]);

// set
map.set("place", "New Delhi");

// delete
map.delete("age");

// override
map.set("place", "Gurugram");

// has
console.log(map.has("name"));

// size
console.log(map.size);

// convert map into an array
console.log([...map]);

console.log(map);
