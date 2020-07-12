let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiply2 = multiply(2);
multiply2(3)
