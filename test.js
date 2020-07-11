let obj = (function(){
    let objInstance;

    let create = () => {
        let isWalking = false;
        
        let start = () => {
            isWalking = true;
        }

        let currentState = () => {
            return isWalking
        }

        return {
            walk: start,
            currentState: currentState
        }

    }

    return {
        getInstance: function (){
            if(!objInstance){
                objInstance = create();
            }

            return objInstance;
        }
    }

})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

console.log(`obj1 ${obj1.currentState()}`);
console.log(`obj2 ${obj2.currentState()}`);

obj1.walk();

console.log(`obj1 ${obj1.currentState()}`);
console.log(`obj2 ${obj2.currentState()}`);

