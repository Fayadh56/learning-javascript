/*
 * Functions are Objects: First Class Functions?!
 * Functions in JS are a special type of object, can attach primitive, object or function
 * In JS it also has two hidden properties: 
        name(optional, or anonymous), 
        CODE: The function is an object with properties, and the code you write is one
        of those properties. The Code you write is invocable "()"
 * So you have to think of functions, like objects with the CODE property, and you can
 * a bunch of interesting things with functions in js. 
 */

// First Class Functions: Everything you can do with other types (objects, strings etc), 
// you can do with functions. Assign them to variables, pass them around, create them on the // fly etc. 

function greet() {
    console.log('Hi');
}

greet.language = 'english';

console.log(greet.language);
// wow, language propety is now attached to the function?!

greet();

// so think of a function as more than just a container of code

// Name: greet
// Code: Body of function 