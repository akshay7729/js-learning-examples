var add = function(a){
    return function (b){
        return a + b;
    }
};

var addToFive = add(5);

// addToFive basically is this -> 
// return function (b){
//     return 5 + b;
// }

console.log(addToFive(1));

// --------------------------------

var avg = function (...n){
    let tot = 0;
    for (let i = 0; i < n.length; i++){
        tot += n[i]
    }

    return tot/n.length
};