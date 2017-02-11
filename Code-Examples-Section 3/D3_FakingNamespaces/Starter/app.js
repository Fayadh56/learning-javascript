/**
 Namespaces: A container for variables and functions
 To keep variables and functions with the same name seperate
 
 IN js we don't need namespaces as a feature, due to the nature of js objects. 
 
 So you can fake namespaces this way in JS, and you can see this if you look at 
 code in open source frameworks. 
 */



// have a container for english greeting, and container for spanish
// you can prevent collisions by creating an object as a container

var english = {
    greetings: {
        basic: 'Hello!'
    }
};

var spanish = {greet:'Hola!'};

console.log(english.greetings.basic);

console.log(spanish.greet);
