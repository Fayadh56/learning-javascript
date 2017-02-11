var Tony = {
    firstName: 'Tony', 
    lastName: 'Peter',
    address: {
        street: '134-1500 Richmond Street', 
        city: 'London', 
        state: 'ON', 
        country: 'Canada'
    },
    school: {
        name: 'Western University', 
        program: 'Software Engineering'
    }
};

// same as creating an empty object using var person = new Object();
// It's because JS assumes you're creating an object, if it doesn't come across something. 


//person = new Object();
//person.firstName = "Tony";
//person.lastName = "Mark";
//// Object literal notation is better than this^^


// Using object literal is the preferred way to create objetcs, and its even better 
// as you can pass and create these objects on the fly. 

function greet(person) {
    console.log('Hi ' + person.firstName);
}

greet(Tony);

//  but I can do

greet({ 
    firstName: 'Dank',
    lastName: 'Pepe'
})

// JS engine sees o function -> passing an object so it creates the object on the fly. 
// Pretty damn neat. 

Tony.address2 = {
    street: '333 Second St.'
}

// why does this work this way??^
// 