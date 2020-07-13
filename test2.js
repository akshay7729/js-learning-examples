function sum(x){
    x = x*10
    return function (y) {
        return function(z) {
            console.log(x+y+z)
        }
    }
}

sum(2)(3)(4)