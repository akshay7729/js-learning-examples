let name = {
  firstName: "John",
  lastName: "Doe",
};

let printName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

let printMyName = printName.bind(name);
printMyName();

// custom bind
Function.prototype.myBind = function (...args) {
  const obj = this;
  return function () {
    obj.call(args[0]);
  };
};

let printMyName2 = printName.myBind(name);
printMyName2();
