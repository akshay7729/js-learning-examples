class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var user1 = new User('abc@gmail.com', 'Akshay');
var user2 = new User('xyz@gmail.com', 'Rinku');

console.log(user1);
console.log(user2);

// constructor function creates a new function
// new - creates a new empty object