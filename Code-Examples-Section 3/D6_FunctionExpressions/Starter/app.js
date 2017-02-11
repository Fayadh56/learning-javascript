/*
 Expression: A unit of code that results in a value
 
 In JS because functions are objects, we have function Expressions(powerful), and 
 Function statemets, 
 
 // THIS IS CALLED FUNCTIONAL PROGRAMMING Due to first class functions. 
 */

greet();

// function statement
function greet() {
    console.log('hi - greet');
}


// what happens if I call anonGreet above declaration
//anonymousGreet();
// undefined as the js engine hasnt yet assigned it to the function
// Not surprising as JS only hoisted the variable. SO have to set equal then invoke it. 
// throws Uncaught TypeError: anonymousGreet is not a function

// the anonGreet var points to the function object in memory, but no Name this time
// as I already have a var that references it, so its anonymous. 
var anonymousGreet = function() {
        console.log('hi');
}

// can invoke using 
// at this point equals operator has run, and is pointing to the function object. 
 anonymousGreet();

function log(a) {
    console.log(a);
    // this runs the function. Damn, passing a function as a parameter, then use them 
    // like you do variables. 
    // THIS IS CALLED FUNCTIONAL PROGRAMMING
    a();
}

// on the fly creation
//log(3);
//
//log("Hello");
//
//log({
//    greeting: 'hi'
//})

// can do
// creating a function on the fly, as they're basically objects. 

log(function() {
    console.log('hi');
})