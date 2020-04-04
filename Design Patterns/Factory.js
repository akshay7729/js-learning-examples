function Developer(name){
    this.name = name
    this.type = "Frontend"
}

function Tester(name){
    this.name = name
    this.type = "tester"
}

function EmployeeCreate(){
    this.create = (name, type) => {
        switch(type){
            case 1 : new Developer(name)
                     break;

            case 2 : new Tester (name)
                     break;
        }
    } 
}

const Employee = new EmployeeCreate();
const epm = [];

epm.push(Employee.create("Akshay", 1));

console.log(epm);