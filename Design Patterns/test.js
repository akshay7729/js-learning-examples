let obj = (function(){

    let objInstance;

    // create method
    function create(){
        let isWalking = false;

        let start = function(){
            isWalking = true;
        }

        let currentState = function(){
            return isWalking
        }

        return {
            walk : start,
            currentState: currentState
        }
    }

    return {
        getInstance: function(){
            if(!objInstance){
                objInstance = create();
            }

            return objInstance;
        }
    }
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

console.log(`obj1 ${obj1.create()}`)
console.log(`obj2 ${obj1.create()}`)