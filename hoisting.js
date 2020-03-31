// function declaration


abc(20); // functions are already defiend before the execution phase sharts

function abc(x){
    console.log(x*2)
}

// function expression

// xyz(6); -> won't work because of hoisting
// it(var) is defined after the context path is initiated in execution context.

var xyz = function (y){
    console.log(y*3)
}

xyz(6); // will work