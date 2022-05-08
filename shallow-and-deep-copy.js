// obj are reference types

let obj1 = { name: "Akshay" };

let obj2 = obj1;
obj2["name"] = "Akshay Changed Value";
// both obj2 and obj1 values will change --- shallow copy

let obj3 = Object.assign({}, obj1);
obj3["name"] = "Akshay Deep copy";
// obj3 and obj1 will be different

console.log(obj1 === obj2, obj1, obj2);
console.log(obj3 === obj1, obj1, obj3);
