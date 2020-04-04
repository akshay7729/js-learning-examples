// IIFE
var people = (function(){
    var name = "Akshay";
    function sayName(){
        console.log(name);
    }
    return {
        sayYourName: sayName
    }
})();

people.sayYourName();
