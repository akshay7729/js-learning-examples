// note - array starts from 0

const numbers = [1,3,4,5];
numbers.splice(1,0,2);
// inserts at number 2nd position in an array

const numbers2 = [1,2,3,5]
numbers2.splice(3,1,4);

// inserts at number 4th position and replaces that position with the value

const numbers3 = [1,2,'Dummy',3];
numbers3.splice(2,1)
// removes from the 3rd position

console.log(numbers1)
console.log(numbers2)
console.log(numbers3)