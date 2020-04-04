var akshay = {
    name: 'Akshay',
    age: 28,
    job: 'developer',
    presentation: function(style, timeOfDay) {
        if(style === 'formal'){
            console.log(`good ${timeOfDay}. 
                            I am ${this.name}, 
                            I am ${this.age} years old
                            I am a ${this.job}
                            `);
        }else if(style === "casual"){
            console.log(`Hey what's up.
                        I am ${this.name}, 
                        I am ${this.age} years old
                        I am a ${this.job}  
                        Have a nice ${timeOfDay}   
            `)
        }
    }
}

var rinku = {
    name: 'Rinku',
    age: 26,
    job: 'developer'
}

akshay.presentation('formal','morning');

// call method in action 
// rinku object is switched with this paramater.
// So, now akshay object is switched with rinku
akshay.presentation.call(rinku, 'formal', 'morning');

// apply takes arguments as an array
// akshay.presentation.apply(rinku, ['formal','morning']);

// bind allows us to preset an argument
// bind makes a copy of the function and does not call immediately
// works like immutable variables
var akshayWork = akshay.presentation.bind(rinku,'casual');
akshayWork('afternoon');
akshayWork('evening');
