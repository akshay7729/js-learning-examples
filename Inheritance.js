class User {
    // constructor can run when their objects is created 
    //(when classes are instantiated)
    constructor(username, email, password){

        // taking the values and assigning the properties to the class
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // static method
    static countUsers(){
        console.log('10 users');
    }

    // method
    register(){
        console.log(`${this.username} is now registered`)
    }
}

let akshay = new User('Akshay','ak@ex.com','12345678');

akshay.register();
User.countUsers();


// Inheritance

class Member extends User{
    constructor(username, email, password, city){

        // super calls out the base constructor
        super(username, email, password);
        this.city = city
    }

    getCity(){
        console.log(`${this.username} is located in ${this.city}`)
    }

}

let duddly = new Member('Duddly','duddly@eg.com','1233234234','Delhi');
duddly.getCity();