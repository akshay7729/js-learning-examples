var func1 = function (x) {
    var a = 10;
    var b = 20;
    return function(y) {
        return function(z){
            return a + b + x + y + z;
        }
    }
}

var innerFunc = func1(5);
var innerFunc2 = innerFunc(40);
console.log('innerFunc', innerFunc2(50));
console.log('sum', func1(10)(20)(30));