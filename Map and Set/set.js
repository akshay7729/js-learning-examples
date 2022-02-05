// set is unordered pool of unique elements

const arr = [1, 2, 3, 4, 5, 2, 3, 4];
const set = new Set(arr);

// adding in set
set.add(6);

// delete
set.delete(3);

// clear
// set.clear();

// if contains or has
set.has(5);
console.log(set.has(5));

// size
console.log(set.size);

console.log(arr);
console.log(set);
