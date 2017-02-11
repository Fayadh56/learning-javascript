var a; 

// goes out to internet and looks for a value
a = 'hi';
if (a) {
    // something is there
    console.log('something is there');
    // because of existence and booleans, js try to convert a to a boolean value.. 
    // but if undefined, null or ''
    // it will evaluvate as false. 
    // however if a = 0 still evaluvates to 0
} else {
    console.log('nothing');
}

// can do 
var b = 0;
if (b || b === 0) {
    console.log("oh damn got it to check for the value 0");
    // as === runs first, then ||
    // so does b || true
    // better way to check if a is something, 
    // a is not null, undefined or empty string
}