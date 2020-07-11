let obj = (function(){
    let objInstance;
    function create(){

        let _isRunning = false;
        let start = function(){
            _isRunning = true;
        }

        let currentState = function(){
            return _isRunning
        }

        return {
            start: start,
            currentState: currentState
        }
    }
    return {
        getInstance: function(){
            if(!objInstance){
                objInstance = create()
            }

            return objInstance;
        }
    };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();


console.log('obj1', obj1.currentState())
console.log('obj2', obj2.currentState())

obj1.start();

console.log('obj1', obj1.currentState())
console.log('obj2', obj2.currentState())