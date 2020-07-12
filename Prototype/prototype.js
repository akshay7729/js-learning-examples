let arr = ['Akshay','Rinku'];
let obj = {
    name: 'Akshay',
    country: 'India',
    getInfo: function(){
        console.log(`${this.name} is located in ${this.country}`)
    }
}

function foo(){

}

let str = "Akshay";

// prototype chain for array

console.log(arr.__proto__) // array
console.log(Array.prototype) // array
console.log(arr.__proto__.__proto__) // object
console.log(arr.__proto__.__proto__.__proto__) // null

// prototype chain for object

console.log(obj.__proto__) // object
console.log(Object.prototype) // object
console.log(obj.__proto__.__proto__) // null


// prototype chain for function

console.log(foo.__proto__) // function
console.log(Function.prototype) // function
console.log(foo.__proto__.__proto__) // object
console.log(foo.__proto__.__proto__.__proto__) // null


// prototype chain for object

console.log(str.__proto__) // object
console.log(String.prototype) // object
console.log(str.__proto__.__proto__) // object
console.log(str.__proto__.__proto__.__proto__) // null

// ---------------------------------------------------------------- //

// Everything in javascript is an object
